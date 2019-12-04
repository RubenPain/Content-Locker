function validate() {
  var email = $('#input').val();
  var x = false;
  var slc = $('#sociallocker-content');

  if (email.indexOf("@")>0){
  x = true;
  var varData = 'email='+email; 
  }
  if (x){
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
