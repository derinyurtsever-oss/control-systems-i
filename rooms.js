/* Control Systems I — room explorer.
   Content lives in rooms-data.js. Add ?edit to the URL to move the dots. */

(function () {
  "use strict";

  var ROOMS = window.ROOMS;
  if (!ROOMS || !ROOMS.length) return;

  var stage   = document.getElementById("stage");
  var shot    = document.getElementById("shot");
  var dotsEl  = document.getElementById("dots");
  var missing = document.getElementById("missing");
  var sheet   = document.getElementById("sheet");
  var body    = document.getElementById("sheetBody");
  var nav     = document.getElementById("roomsNav");

  var EDIT = new URLSearchParams(location.search).has("edit");
  var index = 0;
  var lastFocus = null;

  /* ---------- text helpers ---------- */

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  // escape, then highlight anything still written in [brackets]
  function h(s) { return esc(s).replace(/\[([^\]]+)\]/g, '<span class="ph">[$1]</span>'); }

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

  /* ---------- dots ---------- */

  /* The photo is object-fit: cover, so part of it is cropped. Work out
     exactly where the image really sits and place each dot against that,
     otherwise the dots drift off their objects as the window changes. */
  /* On a phone the photo is letterboxed instead of cropped (see the
     matching object-fit rule in the CSS), otherwise most of the dots end
     up outside the visible slice. */
  function isContain() { return window.matchMedia("(max-width: 720px)").matches; }

  function photoBox() {
    var nw = shot.naturalWidth || 3, nh = shot.naturalHeight || 2;
    var cw = stage.clientWidth, ch = stage.clientHeight;
    var scale = isContain() ? Math.min(cw / nw, ch / nh) : Math.max(cw / nw, ch / nh);
    var dw = nw * scale, dh = nh * scale;
    return { w: dw, h: dh, x: (cw - dw) / 2, y: (ch - dh) / 2, cw: cw };
  }

  function placeDots() {
    var b = photoBox();

    Array.prototype.forEach.call(dotsEl.children, function (el) {
      el.style.left = (b.x + (el._x / 100) * b.w) + "px";
      el.style.top  = (b.y + (el._y / 100) * b.h) + "px";
    });

    // nudge any label that would hang off the side of the screen
    Array.prototype.forEach.call(dotsEl.children, function (el) {
      var tag = el.querySelector(".tag");
      if (!tag) return;
      tag.style.setProperty("--shift", "0px");
      var r = tag.getBoundingClientRect();
      var shift = 0;
      if (r.left < 10) shift = 10 - r.left;
      else if (r.right > b.cw - 10) shift = (b.cw - 10) - r.right;
      if (shift) tag.style.setProperty("--shift", Math.round(shift) + "px");
    });
  }

  function buildDots(room) {
    dotsEl.innerHTML = "";
    room.hotspots.forEach(function (spot) {
      var b = document.createElement("button");
      b.type = "button";
      b.className = "hotspot";
      b.setAttribute("aria-label", spot.label);
      b.innerHTML = '<span class="ring"></span><span class="core"></span><span class="tag">' + esc(spot.label) + "</span>";
      b._x = spot.x;
      b._y = spot.y;
      b._spot = spot;
      b.addEventListener("click", function () {
        if (b._dragged) { b._dragged = false; return; }
        openPanel(spot, b);
      });
      if (EDIT) makeDraggable(b);
      dotsEl.appendChild(b);
    });
    placeDots();
  }

  /* ---------- showing a room ---------- */

  function show(i) {
    index = (i + ROOMS.length) % ROOMS.length;
    var room = ROOMS[index];

    shot.classList.remove("ready");
    missing.hidden = true;
    shot.alt = room.name + " — " + room.place.replace(/[\[\]]/g, "");
    shot.src = room.photo;

    document.getElementById("capName").textContent = room.name;
    document.getElementById("capSub").innerHTML = h(room.place) + " · " + esc(room.when);

    buildDots(room);
    paintNav();

    // keep the next room's photo warm so switching feels instant
    var next = ROOMS[(index + 1) % ROOMS.length];
    if (next !== room) { new Image().src = next.photo; }
  }

  shot.addEventListener("load", function () {
    shot.classList.add("ready");
    missing.hidden = true;
    placeDots();
  });

  shot.addEventListener("error", function () {
    missing.hidden = false;
    document.getElementById("missingPath").textContent = ROOMS[index].photo;
    placeDots();
  });

  document.getElementById("prev").addEventListener("click", function () { show(index - 1); });
  document.getElementById("next").addEventListener("click", function () { show(index + 1); });

  document.addEventListener("keydown", function (e) {
    if (sheet.open) return;
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });

  window.addEventListener("resize", placeDots);

  /* ---------- panel ---------- */

  function openPanel(spot, btn) {
    var p = spot.panel;
    var html = '<p class="s-kicker">' + h(p.kicker || "") + "</p>" +
      '<h2 id="sheetTitle">' + h(p.title) + "</h2>" +
      (p.lead ? '<p class="s-lead">' + h(p.lead) + "</p>" : "") +
      (p.list ? '<ul class="s-list">' + p.list.map(function (li) { return "<li>" + h(li) + "</li>"; }).join("") + "</ul>" : "") +
      (p.links ? '<div class="s-links">' + p.links.map(function (l) {
        return '<a href="' + esc(l.href || "#") + '">' + h(l.label) + "</a>";
      }).join("") + "</div>" : "") +
      (p.note ? '<p class="s-note">' + h(p.note) + "</p>" : "");

    body.innerHTML = html;
    body.scrollTop = 0;

    Array.prototype.forEach.call(dotsEl.children, function (el) { el.classList.remove("open"); });
    if (btn) btn.classList.add("open");

    if (!sheet.open) {
      lastFocus = document.activeElement;
      sheet.showModal();
    }
  }

  function closePanel() {
    sheet.close();
    Array.prototype.forEach.call(dotsEl.children, function (el) { el.classList.remove("open"); });
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.getElementById("sheetClose").addEventListener("click", closePanel);
  sheet.addEventListener("click", function (e) { if (e.target === sheet) closePanel(); });
  // links are placeholders until real files exist
  body.addEventListener("click", function (e) {
    var a = e.target.closest("a");
    if (a && (a.getAttribute("href") === "#" || !a.getAttribute("href"))) e.preventDefault();
  });

  /* ---------- edit mode ----------
     Drag a dot to move it, click the photo to read a position off it,
     then copy the whole set back into rooms-data.js. */

  function makeDraggable(b) {
    b.addEventListener("pointerdown", function (e) {
      e.preventDefault();
      b.setPointerCapture(e.pointerId);
      var moved = false;

      function move(ev) {
        moved = true;
        b._dragged = true;
        var pos = toPhotoPercent(ev.clientX, ev.clientY);
        b._x = pos.x;
        b._y = pos.y;
        placeDots();
        readout(pos);
      }
      function up(ev) {
        b.releasePointerCapture(ev.pointerId);
        b.removeEventListener("pointermove", move);
        b.removeEventListener("pointerup", up);
        if (!moved) b._dragged = false;
      }
      b.addEventListener("pointermove", move);
      b.addEventListener("pointerup", up);
    });
  }

  function toPhotoPercent(clientX, clientY) {
    var r = stage.getBoundingClientRect();
    var b = photoBox();
    return {
      x: +(((clientX - r.left - b.x) / b.w) * 100).toFixed(1),
      y: +(((clientY - r.top - b.y) / b.h) * 100).toFixed(1)
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
        return "        " + el._spot.id + ": x: " + el._x + ", y: " + el._y;
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
