$(document).ready(function(){
    gnbControl();
    openCloseControl("a[data-panel='search']");
    openCloseControl("a[data-panel='shoppingBag']");
    openCloseControl("a[data-panel='addNewAddress']");
    openCloseControl("a[data-panel='editUnAddress']");
    openCloseControl("a[data-panel='paymentComplete']");
    quantityComponent("#shoppingBag #countNumb",".countMinus",".countPlus" ,"#totalPrice");
    quantityComponent(".detailContainer .countComp #countNumber",".countMinus",".countPlus");
    quantityComponent(".cartContainer .firstQc",".firstCountMinus",".firstCountPlus");
    quantityComponent(".cartContainer .secoundQc",".secondCountMinus",".secondCountPlus");
    postComment();
    selectComponent(".selectComponent select");
    selectComponent("nav ul > li");
    toggleControl(".listContainer form fieldset legend");
    toggleControl(".faqContainer div div ul li h4");
    muiToggleControl();
    imgSwap(".imgSwapBox ul li img",".imgSwapBox > img");
    checkOutPanelControl();
    checkOutTabControl(".checkOutContainer *[class^='btn']","li[id^='step']");
    teamControl();
    customSlider(".mainSlider",1,4,325,80,true,false,true);
    customSlider(".memberSlider",1,1,0,0,false,true,true,".btnNext",".btnPrev","<");
    popupScroll();
    detailRadioCheck();
});

function gnbControl(){
    if (window.matchMedia("(min-width: 1280px)").matches){
        var childHeight, logoHeight, newHeight;
        
        $("header nav ul > li").hover(function(){
            childHeight = $(this).children("ol").height();
            padding = 30;
            logoHeight = $("h1").height()+padding;
            newHeight = childHeight+logoHeight;
            $("header").css("height",newHeight);
        });
        
        $("header").on("mouseleave", function(){
            $("header").css("height",logoHeight);
        });
      }
}

function openCloseControl(target){
    var currentPanel = null;
    $(target).click(function(){
        currentPanel = "#" + $(this).attr("data-panel");
        $(currentPanel).addClass("active");
    });
    $(".btn_close").click(function(){
        $(currentPanel).removeClass("active");
    });
}

function quantityComponent(target, minus, plus, price){
    var orderField = $(target);
    var orderCount = $(orderField).val();
    var productPrice = Number($(price).val());
    var totalPrice = $(price);
    $(minus).click(function(){
        orderCount --;
        if(orderCount <= 1){
            orderCount = 1;
        }
        orderField.val(orderCount);
        $(totalPrice).val(productPrice * orderCount);
    });
    $(plus).click(function(){
        orderCount ++;
        if(orderCount >= 99){
            orderCount = 99;
        }
        orderField.val(orderCount);
        $(totalPrice).val(productPrice * orderCount);
    });
}

function selectComponent(target){
    $(target).click(function(){
        $(this).toggleClass("active");
    });
}

function toggleControl(target){
    $(target).click(function(){
        $(this).parent().toggleClass("active");
    });
}

function muiToggleControl(){
    $("#muiNavBtn").click(function(){
        if($(this).val() == "menu"){
            $(this).val("close");
        }else if($(this).val() == "close"){
            $(this).val("menu");
        }
        $(this).toggleClass("active");
        $("header nav").toggleClass("active");
    });
}

function postComment(){
    $(".contactUsContainer form fieldset a").click(function(){
        $(".contactUsContainer .successComment").toggleClass("active");
        $(".contactUsContainer form fieldset").removeClass("active");
    });
}

function imgSwap(target,print){
    var printImg = null;
    $(target).click(function(){
        printImg = $(this).attr("src");
        $(print).attr("src",printImg);
    });
}

function checkOutPanelControl(){
    if (window.matchMedia("(min-width: 1280px)").matches){
        var headerHeight = $("header").height();
        var checkOutPanel = $(".checkOutpanel");
        var bottomLine = $(".checkOutContainer .wrap").height() - $(checkOutPanel).height();
        var recorvePos = $(".checkOutContainer").css("margin-top");
        var holdonPos = 170;
        
        $(window).scroll(function(){
            if($(this).scrollTop() >= headerHeight){
                $(checkOutPanel).css({
                    "position":"fixed",
                    "top": holdonPos
                });
            }
            if($(this).scrollTop() < headerHeight){
                $(checkOutPanel).css({
                    "position":"absolute",
                    "top": recorvePos
                });
            }else if($(this).scrollTop() >= bottomLine){
                $(checkOutPanel).css({
                    "position":"absolute",
                    "top": bottomLine
                });
            }
        });
    }
}

function checkOutTabControl(target,tabPanel){
    var currentTab = null;
    $(target).click(function(){
        currentTab = "#" + $(this).attr("data-panel");
        $(tabPanel).removeClass("active");
        $(currentTab).addClass("active");
    });
}

function teamControl(){
    $(".teamContainer ul li").click(function(){
        teamPanel = "#" + $(this).attr("data-panel");

        $(".teamContainer ul > *").removeClass("active");
        $(".teamContainer ul li > div").removeClass("active");
        $(this).addClass("active");
        $(teamPanel).addClass("active");
    });
}

function customSlider(target,mivSVal, maxSVal, swVal, smVal, hcoVal,infVal, ctVal, ntVal, pvVal,pvtVal){
    $(target).bxSlider({
        pager: false,
        minSlides: mivSVal,
        maxSlides: maxSVal,
        slideWidth: swVal,
        slideMargin: smVal,
        hideControlOnEnd: hcoVal,
        infiniteLoop: infVal,
        moveSlides: 1,
        controls : ctVal,
        nextSelector : ntVal,
        prevSelector : pvVal,
        prevText: pvtVal
    });
}


function popupScroll(){
    if (window.matchMedia("(max-width: 767px)").matches){
        var marginTop = parseInt( $(".myPagePopup").css('margin-top'));
        $(window).scroll(function(e){
          $(".myPagePopup").css("margin-top", marginTop - $(this).scrollTop() );
        });
    }
};

function detailRadioCheck(){
    $(".radioGroup .sale").click(function(){
        $(".radioGroup").addClass("active");
    });
    $(".radioGroup .nosale").click(function(){
        $(".radioGroup").removeClass("active");
    });
};