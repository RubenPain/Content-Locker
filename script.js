function validate() {
  var email = $('#input').val();
  var x = false;
  var slc = $('#sociallocker-content');

  if (email.indexOf("@")>0){
  x = true;
  var varData = 'email='+email; 
  }
  if (x){
    slc.html("<iframe width='1280' height='720' src='https://www.youtube.com/embed/6FbjYX213Nk' frameborder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowfullscreen></iframe>");
    $("#sociallocker-links").css("display", "none");
		$("#sociallocker-overlay").css("display", "none"); 
		$("#sociallocker-content").css("top", "0");
    $.ajax({
      type: "POST",
      url: "php.php",
      data: varData,
      success: function(){
        alert("That's work");
      }
    })
  }
  else{
    alert("Don't Work");
  }
};
