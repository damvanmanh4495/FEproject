$(document).ready(function(){
  $("#layout1").click(function(){
    $(".productShow_listPro").parent().removeClass("col-md-6").addClass("col-md-4");
    
  });
  $("#layout2").click(function(){
    $(".productShow_listPro").parent().removeClass("col-md-4").addClass("col-md-6");
    
  });
});