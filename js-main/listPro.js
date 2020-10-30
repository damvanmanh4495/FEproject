$(document).ready(function(){
    $('.btn_change_layout1').click(function(){
        $(".productShow_listPro").parent().removeClass("col-md-4").addClass("col-lg-6");
        $(".btn_change_layout a").first().addClass("classChange_layoutList");
        $(".btn_change_layout a").eq(1).removeClass("classChange_layoutList");
    })
    $('.btn_change_layout2').click(function(){
        $(".productShow_listPro").parent().removeClass("col-lg-6").addClass("col-md-4");
        $(".btn_change_layout a").eq(1).addClass("classChange_layoutList");
        $(".btn_change_layout a").eq(0).removeClass("classChange_layoutList");
    })
    // $('.btn_change_layout1').click(function(){
    //     $(".btn_change_layout a:first").addClass("classChange_layoutList");
    // })
})