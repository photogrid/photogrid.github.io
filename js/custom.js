(function() {
  var social = document.querySelectorAll('.widget-social__item');
  for (var i = 0; i < social.length; i++) {
    social[i].querySelector('a').addEventListener('click', function (e) {
      var name = this.querySelector('span').innerHTML;
      ga('send', 'event', 'social', 'click', name);
      gtag('event', 'click', {
        'event_category': 'social',
        'event_label': name
      });
    })
  }
  var menu = document.querySelectorAll('.menu__social a');
  for (var i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', function (e) {
      var name = this.querySelector('span').innerHTML;
      gtag('event', 'click', {
        'event_category': 'menu',
        'event_label': name
      });
    });
  };
})()