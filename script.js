/* Portfolio interactions: scroll reveals + counting stats.
   Progressive enhancement — the page is fully readable without JS. */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Mark sections for reveal ---- */
  var revealTargets = document.querySelectorAll(
    ".section, .hero__title, .hero__lede, .hero__actions, .titleblock, .marquee"
  );
  revealTargets.forEach(function (el) { el.classList.add("reveal"); });

  if (!("IntersectionObserver" in window) || reduceMotion) {
    // Show everything immediately
    revealTargets.forEach(function (el) { el.classList.add("in"); });
    runCounters(document);
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        runCounters(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

  revealTargets.forEach(function (el) { io.observe(el); });

  /* ---- Animated stat counters ---- */
  function runCounters(scope) {
    var nums = scope.querySelectorAll ? scope.querySelectorAll(".stat__num[data-count]") : [];
    nums.forEach(function (el) {
      if (el.dataset.done) return;
      el.dataset.done = "1";
      var target = parseInt(el.dataset.count, 10) || 0;
      var suffix = el.dataset.suffix || "";
      var start = null;
      var dur = 1100;

      function tick(ts) {
        if (start === null) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(eased * target) + suffix;
        if (p < 1) requestAnimationFrame(tick);
      }
      requestAnimationFrame(tick);
    });
  }

  /* ---- Active nav link on scroll ---- */
  var sections = document.querySelectorAll("main section[id]");
  var navLinks = document.querySelectorAll(".nav__links a");
  if (sections.length && navLinks.length) {
    var navIO = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute("id");
          navLinks.forEach(function (a) {
            a.style.color = a.getAttribute("href") === "#" + id ? "" : "";
            if (a.getAttribute("href") === "#" + id) {
              a.classList.add("is-active");
            } else {
              a.classList.remove("is-active");
            }
          });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    sections.forEach(function (s) { navIO.observe(s); });
  }
})();
