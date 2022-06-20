$(document).ready(function(){
  url = "http://127.0.0.1:5000/getNotificationsNumber";
  
  fetch(url).then(response => response.json()).then(function(data){
    document.getElementById("wrapper").setAttribute('data-value', data["notificationsNumber"]);
    
    if (data["notificationsNumber"] != 0)
    {
      $(".wrapper").toggleClass("notifications");
    }

  });

  $(document).click(function(event) {

    if (!$(event.target).closest('.notification_icon .fa-bell').length && !$(event.target).closest('#profile').length) {
      var active = $('.dropdown').hasClass("active");
      if (active)
      {
        $(".dropdown").toggleClass("active");
      }
      var active = $('#menu').hasClass("active");
      if (active)
      {
        $("#menu").toggleClass("active");
      }
    }
    
    
    
  });
    $("#profile" ).click(function() {
        $("#menu").toggleClass("active");
        var active = $('.dropdown').hasClass("active");
        if (active)
        {
          $(".dropdown").toggleClass("active");
        }
      });
    $(".notification_icon .fa-bell").click(function(){
      $(".dropdown").toggleClass("active");
      fetch('http://127.0.0.1:5000/setnotificationsAlreadyRead').then(response => response.json()).then(function(data){
        document.getElementById("wrapper").setAttribute('data-value', data["notificationsNumber"]);
        if ($('.wrapper').hasClass("notifications"))
        {
          $(".wrapper").toggleClass("notifications");
        }
       
      });
      var active = $('#menu').hasClass("active");
      if (active)
      {
        $("#menu").toggleClass("active");
      }
    })
});



