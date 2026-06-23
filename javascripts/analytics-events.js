/*
 * Lightweight conversion-event tracking.
 * Fires a GA4 event for any clicked element (or ancestor) carrying a
 * data-evt attribute. Optional context comes from data-evt-location and
 * data-evt-label. No-ops gracefully if gtag is unavailable (e.g. analytics
 * blocked or running locally).
 */
(function () {
  function track(el) {
    if (typeof window.gtag !== "function") {
      return;
    }
    var name = el.getAttribute("data-evt");
    if (!name) {
      return;
    }
    var params = {};
    var location = el.getAttribute("data-evt-location");
    var label = el.getAttribute("data-evt-label");
    if (location) {
      params.location = location;
    }
    if (label) {
      params.label = label;
    }
    window.gtag("event", name, params);
  }

  document.addEventListener(
    "click",
    function (event) {
      var target = event.target;
      if (!target || !target.closest) {
        return;
      }
      var el = target.closest("[data-evt]");
      if (el) {
        track(el);
      }
    },
    true
  );
})();
