$(document).ready(function(){

  $("#bonjour").hide();
  $("#suite").hide();
  $("#signature").hide();
  $("#image").hide();
  $("#bonjour").fadeIn(3000);
  $("#suite").fadeIn(9000);
  $("#signature").fadeIn(15000);
  $("button").click(function(){
    $("#bonjour").hide();
    $("#suite").hide();
    $("#signature").hide();
    $("#image").show();
  });

});
