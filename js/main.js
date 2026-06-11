/* Wings Melaka — minimal vanilla JS (no framework, no build).
   Handles the mobile menu toggle and active-link highlighting. */

document.addEventListener('DOMContentLoaded', function () {
  // ----- mobile menu toggle -----
  var burger = document.querySelector('.burger');
  var menu = document.querySelector('.mobile-menu');
  if (burger && menu) {
    burger.addEventListener('click', function () {
      menu.classList.toggle('open');
    });
    // close the menu when a real link inside it is tapped
    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { menu.classList.remove('open'); });
    });
  }

  // ----- highlight the current page in the nav -----
  var path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('nav.main .nav-item > a, .mobile-menu > a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (href === path) a.classList.add('active');
  });
});
