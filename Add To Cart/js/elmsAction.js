$(function(){
    $(".view-cart-button").click(function(cartList){
        cartList.stopPropagation();
        if($(".all-items-details-section").css("opacity") == "0"){
            $(".all-items-details-section").css({"display": "block","opacity": "1"});
        }else{
            $(".all-items-details-section").css({"display": "none","opacity": "0"});
        }
    });
    $(".aid-win-controls > i").click(function(){
        $(".all-items-details-section").css({"display": "none","opacity": "0"});
    });
});