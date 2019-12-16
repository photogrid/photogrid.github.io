(function() {
  var social = document.querySelectorAll('.widget-social__item');
  for (var i = 0; i < social.length; i++) {
    social[i].querySelector('a').addEventListener('click', function (e) {
      var name = this.querySelector('span').innerHTML;
      console.log(name);
      ga('send', 'event', 'social', 'click', name);
    })
  }
})()