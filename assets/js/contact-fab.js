(function () {
  var fab = document.getElementById('contact-fab');
  var popover = document.getElementById('contact-fab-popover');
  if (!fab || !popover) return;

  function closePopover() {
    popover.classList.remove('open');
    fab.setAttribute('aria-expanded', 'false');
  }

  fab.addEventListener('click', function () {
    var isOpen = popover.classList.contains('open');
    if (isOpen) {
      closePopover();
    } else {
      popover.classList.add('open');
      fab.setAttribute('aria-expanded', 'true');
    }
  });

  // Close on outside click
  document.addEventListener('click', function (e) {
    if (!fab.contains(e.target) && !popover.contains(e.target)) {
      closePopover();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && popover.classList.contains('open')) {
      closePopover();
      fab.focus();
    }
  });
})();
