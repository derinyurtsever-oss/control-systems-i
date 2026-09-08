// Mobile navigation toggle
(function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('nav');
  if (!toggle || !nav) return;

  toggle.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  // Close the menu after tapping a link
  nav.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
})();

// Footer timestamp, taken from the page file date
(function () {
  var el = document.getElementById('updated');
  if (!el) return;
  var d = new Date(document.lastModified);
  if (isNaN(d.getTime())) return;
  el.textContent = d.toLocaleDateString(undefined, {
    year: 'numeric', month: 'long', day: 'numeric'
  });
})();
