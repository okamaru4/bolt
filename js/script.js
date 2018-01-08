(function() {
  'use strict';

  var menuBtn = document.querySelector('.js_btn');
  var menuShow = document.querySelector('.js_show');

  menuBtn.addEventListener('click', function() {
    menuShow.classList.toggle('is-active');
  }, false);
})();
