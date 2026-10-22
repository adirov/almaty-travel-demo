document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('td.article_image').forEach(function (cell) {
    cell.closest('table').classList.add('mobile-tour-card');
  });
  var menu = document.getElementById('left_menu');
  var header = document.getElementById('header');
  if (!menu || !header) return;
  var english = /\/en\//.test(location.pathname);
  var button = document.createElement('button');
  button.type = 'button';
  button.className = 'mobile-nav-toggle';
  button.textContent = english ? 'Tours and services' : 'Экскурсии и услуги';
  button.setAttribute('aria-controls', 'left_menu');
  button.setAttribute('aria-expanded', 'false');
  header.insertAdjacentElement('afterend', button);
  function closeMenu() {
    document.body.classList.remove('mobile-menu-open');
    button.setAttribute('aria-expanded', 'false');
  }
  button.addEventListener('click', function () {
    var open = document.body.classList.toggle('mobile-menu-open');
    button.setAttribute('aria-expanded', String(open));
  });
  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape' && button.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      button.focus();
    }
  });
  menu.addEventListener('click', function (event) {
    if (event.target.closest('a')) closeMenu();
  });
});
