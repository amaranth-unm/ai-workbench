// Navbar: mobile collapse (no Bootstrap required)
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    var toggler = document.querySelector('.navbar-toggler');
    var collapse = document.querySelector('.navbar-collapse');

    // Hamburger toggle
    if (toggler && collapse) {
      toggler.addEventListener('click', function () {
        var isOpen = collapse.classList.toggle('show');
        toggler.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
    }

    // Close mobile nav on outside click
    document.addEventListener('click', function (e) {
      if (collapse && toggler && !e.target.closest('.navbar') && collapse.classList.contains('show')) {
        collapse.classList.remove('show');
        toggler.setAttribute('aria-expanded', 'false');
      }
    });

    // Clickable cards — navigate on click unless a nested link was the target
    document.querySelectorAll('[data-href]').forEach(function (card) {
      card.addEventListener('click', function (e) {
        if (!e.target.closest('a')) {
          window.location = card.dataset.href;
        }
      });
    });

    // Print buttons (e.g. the "Using This Sketch" box)
    document.querySelectorAll('[data-print]').forEach(function (button) {
      button.addEventListener('click', function () {
        window.print();
      });
    });

    // Close mobile nav when a link or button inside it is clicked
    if (collapse) {
      collapse.querySelectorAll('a, button').forEach(function (link) {
        link.addEventListener('click', function () {
          collapse.classList.remove('show');
          if (toggler) toggler.setAttribute('aria-expanded', 'false');
        });
      });
    }
  });
})();
