$(document).ready(function(){
    $(window).scroll(function () { 
        if($("html").scrollTop() >= 1700){
            $(".left_discount").animate({left:"0", opacity:1}, "slow");
            $(".right_discount").animate({right:"0", opacity:1}, "slow");
        } 

    });
    
    $(window).scroll(function(){ 
        if ($(this).scrollTop() > 100) { 
            $('.btn_scrollTop').show(300);
            
        } else { 
            
            $('.btn_scrollTop').hide(300); 
            
        } 
    }); 
    $('.btn_scrollTop').click(function(){ 
        $("html, body").animate({ scrollTop: 0 }, 600); 
        return false; 
    }); 

    // $(window).scroll(function () { 
    //     if($("html").scrollTop() > 80){
    //         $("#sticky_main_header").addClass("sticky");
    //     } else{
    //         $("#sticky_main_header").removedClass("sticky")
    //     }

    // });
})

