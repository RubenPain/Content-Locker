//Create this file on your theme's js folder 
$('body').on('click', '#btn-sub-yt',function() {
  var email = $('#input').val();
  var slc = $('#sociallocker-content')
  var x = false;
  var y = false;

  if(email.indexOf("@")>0){
    if (email.indexOf("@yopmail.com")>0){
      y = true;
      var varData = 'email='+email; 
    }
    else{
      x = true;
      var varData = 'email='+email;
    }
  }
  
  if (x){
    $("#sociallocker-links").css("display", "none");
    $("#sociallocker-overlay").css("display", "none"); 
    $("#sociallocker-content").css("top", "0");
    jQuery.post(
     ajaxurl,
     {
        'action': 'mon_action',
        'email': varData
     },
     function(response){
            console.log('OK');
        }
   );
  }
  else{
  }
  if (y){
    slc.html("<iframe width='700' height='394' src='https://www.youtube.com/embed/oavMtUWDBTM' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    $("#sociallocker-links").css("display", "none");
    $("#sociallocker-overlay").css("display", "none"); 
    $("#sociallocker-content").css("top", "0");
    jQuery.post(
     ajaxurl,
     {
        'action': 'mon_action',
        'email': varData
     },
     function(response){
            console.log('OK');
        }
   );
  }
  else{
  }
});		
