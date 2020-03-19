(function() {
  var social = document.querySelectorAll('.widget-social__item');
  for (var i = 0; i < social.length; i++) {
    social[i].querySelector('a').addEventListener('click', function (e) {
      var name = this.querySelector('span').innerHTML;
      ga('send', 'event', 'social', 'click', name);
    });
  }
  var menu = document.querySelectorAll('.menu__social a');
  for (var i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', function (e) {
      var name = this.querySelector('span').innerHTML;
      ga('send', 'event', 'menu', 'click', name);
    });
  }
  var appbtnMenu = document.querySelectorAll('.widget-appbtn__menu a');
  for (var i = 0; i < appbtnMenu.length; i++) {
    appbtnMenu[i].addEventListener('click', function (e) {
      if (this.getAttribute('data-store') === 'google_play') {
        ga('send', 'event', 'google play', 'click', this.getAttribute('href'));
      } else {
        ga('send', 'event', 'apple store', 'click', this.getAttribute('href'));
      }
    });
  }
  var appbtnSidebar = document.querySelectorAll('.widget-appbtn__sidebar a');
  for (var i = 0; i < appbtnSidebar.length; i++) {
    appbtnSidebar[i].addEventListener('click', function (e) {
      if (this.getAttribute('data-store') === 'google_play') {
        ga('send', 'event', 'google play', 'click', this.getAttribute('href'));
      } else {
        ga('send', 'event', 'apple store', 'click', this.getAttribute('href'));
      }
    });
  }
})()