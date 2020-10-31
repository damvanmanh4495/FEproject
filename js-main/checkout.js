$(document).ready(function(){
    $(".btn_showForm_checkout").click(function(){
      $(".slideShow_login_checkout").slideToggle("slow");
    });
    $(".btn_showFormCoupon").click(function(){
        $(".formCoupon_checkout").slideToggle("slow");
      });

    $("#cb_shipToAddress").click(function(){
      $(".form_differentAddress").slideToggle("slow");
    });

  });