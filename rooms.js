/* Control Systems I — room explorer.
   Content lives in rooms-data.js. Add ?edit to the URL to move the dots. */

(function () {
  "use strict";

  var ROOMS = window.ROOMS;
  if (!ROOMS || !ROOMS.length) return;

  var stage   = document.getElementById("stage");
  var canvas  = document.getElementById("canvas");
  var imgs    = [document.getElementById("shotA"), document.getElementById("shotB")];
  var caption = document.querySelector(".caption");
  var dotsEl  = document.getElementById("dots");
  var missing = document.getElementById("missing");
  var hint    = document.getElementById("hint");
  var sheet   = document.getElementById("sheet");
  var body    = document.getElementById("sheetBody");
  var nav     = document.getElementById("roomsNav");

  var EDIT = new URLSearchParams(location.search).has("edit");
  var index = 0;
  var lastFocus = null;
  var hintShown = false;
  var front = 0;      // which of the two photo layers is showing
  var seq = 0;        // ignores a slow load that has been overtaken

  function activeImg() { return imgs[front]; }

  /* the photo's displayed size, and how far it is panned */
  var view = { w: 0, h: 0, x: 0, y: 0 };

  /* ---------- text helpers ---------- */

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  // escape, then highlight anything still written in [brackets]
  function h(s) { return esc(s).replace(/\[([^\]]+)\]/g, '<span class="ph">[$1]</span>'); }
  function isSmall() { return window.matchMedia("(max-width: 720px)").matches; }

  /* ---------- rooms nav ---------- */

  ROOMS.forEach(function (room, i) {
    var b = document.createElement("button");
    b.type = "button";
    b.textContent = room.name;
    b.addEventListener("click", function () { show(i); });
    nav.appendChild(b);
  });

  function paintNav() {
    Array.prototype.forEach.call(nav.children, function (b, i) {
      b.setAttribute("aria-current", String(i === index));
    });
  }

  /* ---------- layout ----------
     The photo always covers the screen. Whatever spills past the edges can
     be dragged into view, and the dots ride along because they live inside
     the same element and are positioned as percentages of it. */

  function layout() {
    var img = activeImg();
    var nw = img.naturalWidth || 3000, nh = img.naturalHeight || 2000;
    var cw = stage.clientWidth, ch = stage.clientHeight;
    var scale = Math.max(cw / nw, ch / nh);

    view.w = Math.round(nw * scale);
    view.h = Math.round(nh * scale);

    canvas.style.width = view.w + "px";
    canvas.style.height = view.h + "px";

    // start centred, then keep the pan inside the allowed range
    if (view.x === 0 && view.y === 0) {
      view.x = (cw - view.w) / 2;
      view.y = (ch - view.h) / 2;
    }
    clampPan();
    applyPan();
    updateHint();
  }

  function clampPan() {
    var cw = stage.clientWidth, ch = stage.clientHeight;
    var minX = Math.min(0, cw - view.w), minY = Math.min(0, ch - view.h);
    view.x = Math.max(minX, Math.min(0, view.x));
    view.y = Math.max(minY, Math.min(0, view.y));
    if (view.w <= cw) view.x = (cw - view.w) / 2;
    if (view.h <= ch) view.y = (ch - view.h) / 2;
  }

  function applyPan() {
    canvas.style.transform = "translate3d(" + view.x + "px," + view.y + "px,0)";
    shiftLabels();
  }

  /* Dragging is a phone thing. On desktop the photo just sits centred. */
  function pannable() {
    return isSmall() && (view.w - stage.clientWidth > 12 || view.h - stage.clientHeight > 12);
  }

  function updateHint() {
    if (hintShown || !pannable() || EDIT) { hint.hidden = true; return; }
    hint.hidden = false;
  }

  function dismissHint() {
    if (hintShown) return;
    hintShown = true;
    hint.hidden = true;
  }

  /* keep a label from hanging off the side of the screen */
  function shiftLabels() {
    var cw = stage.clientWidth;
    Array.prototype.forEach.call(dotsEl.children, function (el) {
      var tag = el.querySelector(".tag");
      if (!tag) return;

      // a label whose dot has been panned off screen points at nothing
      var d = el.getBoundingClientRect();
      var cx = d.left + d.width / 2, cy = d.top + d.height / 2;
      var off = cx < 4 || cx > cw - 4 || cy < 4 || cy > stage.clientHeight - 4;
      tag.style.visibility = off ? "hidden" : "";
      if (off) return;

      tag.style.setProperty("--shift", "0px");
      var r = tag.getBoundingClientRect();
      var shift = 0;
      if (r.left < 10) shift = 10 - r.left;
      else if (r.right > cw - 10) shift = (cw - 10) - r.right;
      if (shift) tag.style.setProperty("--shift", Math.round(shift) + "px");
    });
  }

  /* ---------- dots ---------- */

  function buildDots(room) {
    dotsEl.innerHTML = "";
    room.hotspots.forEach(function (spot) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "hotspot";
      b.style.left = spot.x + "%";
      b.style.top = spot.y + "%";
      b.setAttribute("aria-label", spot.label);
      b.innerHTML = '<span class="ring"></span><span class="core"></span><span class="tag">' + esc(spot.label) + "</span>";
      b._spot = spot;
      b.addEventListener("click", function () {
        if (b._suppress) { b._suppress = false; return; }
        openPanel(spot, b);
      });
      if (EDIT) makeDraggable(b);
      dotsEl.appendChild(b);
    });
    shiftLabels();
  }

  /* ---------- showing a room ---------- */

  /* The new room loads into the hidden layer first, then the two layers
     cross-fade, so the room never flashes through the dark background.
     The dots and caption dip out and back with it. */
  function show(i) {
    index = (i + ROOMS.length) % ROOMS.length;

    var room = ROOMS[index];
    var incoming = imgs[1 - front];
    var outgoing = imgs[front];
    var token = ++seq;

    paintNav();
    dotsEl.classList.add("fading");
    caption.classList.add("fading");

    incoming.onload = function () {
      if (token !== seq) return;           // a newer switch already won
      front = 1 - front;
      incoming.classList.add("on");
      outgoing.classList.remove("on");
      missing.hidden = true;

      view.x = 0; view.y = 0;
      layout();
      buildDots(room);

      document.getElementById("capName").textContent = room.name;
      document.getElementById("capSub").innerHTML = h(room.place) + " · " + esc(room.when);

      dotsEl.classList.remove("fading");
      caption.classList.remove("fading");

      var next = ROOMS[(index + 1) % ROOMS.length];
      if (next !== room) { new Image().src = next.photo; }
    };

    incoming.onerror = function () {
      if (token !== seq) return;
      missing.hidden = false;
      document.getElementById("missingPath").textContent = room.photo;
      dotsEl.classList.remove("fading");
      caption.classList.remove("fading");
    };

    incoming.alt = room.name + " — " + room.place.replace(/[\[\]]/g, "");
    incoming.src = room.photo;
  }

  document.getElementById("prev").addEventListener("click", function () { show(index - 1); });
  document.getElementById("next").addEventListener("click", function () { show(index + 1); });

  document.addEventListener("keydown", function (e) {
    if (sheet.open) return;
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });

  window.addEventListener("resize", function () {
    layout();
    if (sheet.open && sheet._anchor) positionSheet(sheet._anchor);
  });

  /* ---------- dragging the room ---------- */

  (function () {
    var dragging = false, moved = false, startX = 0, startY = 0, originX = 0, originY = 0, target = null;

    stage.addEventListener("pointerdown", function (e) {
      if (EDIT && e.target.closest(".hotspot")) return;   // edit mode drags dots instead
      if (e.target.closest(".arrow, .bar")) return;
      if (!pannable()) return;

      dragging = true;
      moved = false;
      startX = e.clientX; startY = e.clientY;
      originX = view.x; originY = view.y;
      target = e.target.closest(".hotspot");
      // NB: capturing the pointer here would send the following click to the
      // stage instead of the dot, so it only happens once a drag really starts
    });

    stage.addEventListener("pointermove", function (e) {
      if (!dragging) return;
      var dx = e.clientX - startX, dy = e.clientY - startY;
      if (!moved && Math.abs(dx) + Math.abs(dy) > 6) {
        moved = true;
        dismissHint();
        canvas.classList.add("dragging");
        try { stage.setPointerCapture(e.pointerId); } catch (err) {}
        // a drag that started on a dot must not also count as a tap on it
        if (target) target._suppress = true;
      }
      if (!moved) return;
      view.x = originX + dx;
      view.y = originY + dy;
      clampPan();
      applyPan();
    });

    function end(e) {
      if (!dragging) return;
      dragging = false;
      canvas.classList.remove("dragging");
      try { stage.releasePointerCapture(e.pointerId); } catch (err) {}
      target = null;
    }
    stage.addEventListener("pointerup", end);
    stage.addEventListener("pointercancel", end);
  })();

  /* ---------- panel ---------- */

  /* Open the panel beside the dot it belongs to, not in a fixed corner.
     Phones keep the bottom sheet — a floating card would cover the room. */
  function positionSheet(btn) {
    if (isSmall() || !btn) {
      sheet.style.left = "";
      sheet.style.top = "";
      sheet.style.removeProperty("--from");
      return;
    }
    var d = btn.getBoundingClientRect();
    var vw = window.innerWidth, vh = window.innerHeight;
    var w = sheet.offsetWidth, h = sheet.offsetHeight;
    var m = 16, gap = 20, left, from;

    if (d.right + gap + w <= vw - m) { left = d.right + gap; from = -16; }        // to the right of the dot
    else if (d.left - gap - w >= m)  { left = d.left - gap - w; from = 16; }      // or to its left
    else { left = Math.min(Math.max(d.left + d.width / 2 - w / 2, m), vw - w - m); from = 0; }

    var top = Math.min(Math.max(d.top + d.height / 2 - h / 2, m), vh - h - m);

    sheet.style.left = Math.round(left) + "px";
    sheet.style.top = Math.round(top) + "px";
    sheet.style.setProperty("--from", from + "px");
  }

  function openPanel(spot, btn) {
    var p = spot.panel;
    body.innerHTML =
      '<p class="s-kicker">' + h(p.kicker || "") + "</p>" +
      '<h2 id="sheetTitle">' + h(p.title) + "</h2>" +
      (p.lead ? '<p class="s-lead">' + h(p.lead) + "</p>" : "") +
      (p.list ? '<ul class="s-list">' + p.list.map(function (li) { return "<li>" + h(li) + "</li>"; }).join("") + "</ul>" : "") +
      (p.links ? '<div class="s-links">' + p.links.map(function (l) {
        return '<a href="' + esc(l.href || "#") + '">' + h(l.label) + "</a>";
      }).join("") + "</div>" : "") +
      (p.note ? '<p class="s-note">' + h(p.note) + "</p>" : "");
    body.scrollTop = 0;

    Array.prototype.forEach.call(dotsEl.children, function (el) { el.classList.remove("open"); });
    if (btn) btn.classList.add("open");

    if (!sheet.open) {
      lastFocus = document.activeElement;
      sheet.showModal();
    }
    sheet._anchor = btn;
    positionSheet(btn);   // measured once it is on screen, before the first paint
  }

  function closePanel() {
    sheet.close();
    sheet._anchor = null;
    Array.prototype.forEach.call(dotsEl.children, function (el) { el.classList.remove("open"); });
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.getElementById("sheetClose").addEventListener("click", closePanel);
  sheet.addEventListener("click", function (e) { if (e.target === sheet) closePanel(); });
  body.addEventListener("click", function (e) {
    var a = e.target.closest("a");
    if (a && (a.getAttribute("href") === "#" || !a.getAttribute("href"))) e.preventDefault();
  });

  /* ---------- edit mode ---------- */

  function makeDraggable(b) {
    b.addEventListener("pointerdown", function (e) {
      e.preventDefault();
      e.stopPropagation();
      b.setPointerCapture(e.pointerId);
      var moved = false;

      function move(ev) {
        moved = true;
        b._suppress = true;
        var pos = toPhotoPercent(ev.clientX, ev.clientY);
        b._spot.x = pos.x;
        b._spot.y = pos.y;
        b.style.left = pos.x + "%";
        b.style.top = pos.y + "%";
        shiftLabels();
        readout(pos);
      }
      function up(ev) {
        try { b.releasePointerCapture(ev.pointerId); } catch (err) {}
        b.removeEventListener("pointermove", move);
        b.removeEventListener("pointerup", up);
        if (!moved) b._suppress = false;
      }
      b.addEventListener("pointermove", move);
      b.addEventListener("pointerup", up);
    });
  }

  function toPhotoPercent(clientX, clientY) {
    var r = canvas.getBoundingClientRect();
    return {
      x: +(((clientX - r.left) / r.width) * 100).toFixed(1),
      y: +(((clientY - r.top) / r.height) * 100).toFixed(1)
    };
  }

  function readout(pos) {
    document.getElementById("editOut").textContent = "x: " + pos.x + ", y: " + pos.y;
  }

  if (EDIT) {
    document.body.classList.add("editing");
    document.getElementById("editbar").hidden = false;

    stage.addEventListener("click", function (e) {
      if (e.target.closest(".hotspot")) return;
      readout(toPhotoPercent(e.clientX, e.clientY));
    });

    document.getElementById("copyBtn").addEventListener("click", function () {
      var lines = Array.prototype.map.call(dotsEl.children, function (el) {
        return "        " + el._spot.id + ": x: " + el._spot.x + ", y: " + el._spot.y;
      }).join("\n");
      var text = "// " + ROOMS[index].name + "\n" + lines;
      navigator.clipboard.writeText(text).then(function () {
        document.getElementById("editOut").textContent = "copied";
      }, function () {
        document.getElementById("editOut").textContent = text.replace(/\n/g, "  ");
      });
    });
  }

  show(0);
})();
