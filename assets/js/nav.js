(function () {
  var navbar = document.getElementById('navbar');
  var desktopNav = document.getElementById('desktop-nav');
  var hamburgerBtn = document.getElementById('hamburger-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  var mobileBackdrop = document.getElementById('mobile-backdrop');
  var timelineLine = document.getElementById('timeline-line');
  var NAV_HEIGHT = 80;

  // Show correct nav elements based on viewport
  function updateNavVisibility() {
    var isDesktop = window.innerWidth >= 768;
    if (desktopNav) desktopNav.style.display = isDesktop ? 'flex' : 'none';
    if (hamburgerBtn) hamburgerBtn.style.display = isDesktop ? 'none' : 'block';
    if (timelineLine) timelineLine.style.display = isDesktop ? 'block' : 'none';
    if (!isDesktop) return;
    closeMobileMenu();
  }

  // Scroll detection for navbar background
  function handleScroll() {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  // Mobile menu toggle
  function toggleMobileMenu() {
    var isOpen = mobileMenu.classList.contains('open');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  }

  function openMobileMenu() {
    mobileMenu.classList.add('open');
    mobileBackdrop.classList.add('open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    hamburgerBtn.querySelector('svg:first-child').style.display = 'none';
    hamburgerBtn.querySelector('svg:last-child').style.display = 'block';
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    mobileMenu.classList.remove('open');
    mobileBackdrop.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    hamburgerBtn.querySelector('svg:first-child').style.display = 'block';
    hamburgerBtn.querySelector('svg:last-child').style.display = 'none';
    document.body.style.overflow = '';
  }

  // Smooth scroll to section
  function scrollToSection(id) {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    var el = document.getElementById(id);
    if (!el) return;
    var top = el.getBoundingClientRect().top + window.scrollY - NAV_HEIGHT;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }

  // Event listeners
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', updateNavVisibility);

  if (hamburgerBtn) hamburgerBtn.addEventListener('click', toggleMobileMenu);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeMobileMenu);

  // All scroll buttons/links
  document.querySelectorAll('[data-scroll]').forEach(function (el) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      var target = el.getAttribute('data-scroll');
      closeMobileMenu();
      setTimeout(function () { scrollToSection(target); }, 10);
    });
  });

  // Initialize
  updateNavVisibility();
  handleScroll();
})();
