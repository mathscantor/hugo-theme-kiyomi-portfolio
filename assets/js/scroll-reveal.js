(function () {
  var targets = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-none');
  if (!targets.length) return;

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '-20px' });

  targets.forEach(function (el) { observer.observe(el); });
})();
