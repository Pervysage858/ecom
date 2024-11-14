
// document ready function
$(document).ready(function(){

  $(".cart-btn").click(function(){
    $(this).next(".pro-cnt-box").show();
    $(this).hide()
  });

  var counter = 0;
	$(document).on("click", ".add-prod", function(){
    var $qty=$(this).prev('#pro-cnt');
    var cVal = parseInt($qty.val());
    if (!isNaN(cVal)) {
      $qty.val(cVal + 1);
    }
  })

  $(document).on("click", ".remove-prod", function(){
    var $qty=$(this).next('#pro-cnt');
    var cVal = parseInt($qty.val());
    if (!isNaN(cVal) && cVal > 1) {
      $qty.val(cVal - 1);
    }
    if (cVal == 1) {      
      //$(this).parent().prev(".cart-btn").show();
      //$(this).parent().hide();
    }
  });

  var headH = $("#header").outerHeight();
  var headH1 = $(".comp-name").outerHeight();
  $("#main").css("padding-top", headH + headH1)

  $(".store-menu").click(function(){
    $(".menu-bar").toggleClass("active");
    $(this).toggleClass("active");
    $(".menu-overlay").fadeToggle();
  });

  $(".next-arrow").click(function(){
    $(this).parent("li").siblings().find("ul").slideUp();
    $(this).parent("li").siblings().find(".next-arrow").removeClass("active");
    $(this).next("ul").slideToggle();
    $(this).toggleClass("active");
    //$(this).parent().parent().css({'transform':'translateX(-100%)'});
  })

  /*$(".next-arrow").click(function(){
    $(this).next("ul").slideToggle();
    $(this).toggleClass("active");
    //$(this).parent().parent().css({'transform':'translateX(-100%)'});
  })*/

 /* $(".prev-arrow").click(function(){
    $(this).parent().parent().css({'transform':'translateX(0)'}).removeClass("active");
    $(this).parent().parent().parent().parent().css({'transform':'translateX(0)'});
  })*/


/*  $(".next-arrow").click(function(){
    $(this).next().addClass("active").css({'transform':'translateX(0)'});
    $(this).parent().parent().css({'transform':'translateX(-100%)'});
  })

  $(".prev-arrow").click(function(){
    $(this).parent().parent().css({'transform':'translateX(0)'}).removeClass("active");
    $(this).parent().parent().parent().parent().css({'transform':'translateX(0)'});
  })
*/
  
  $(".enq-btn").click(function(){
    var productID = $(this).attr("for");
    $(".set_product_id").val(productID);
    $(".enq-overlay, .popup-box").fadeIn()
  })

  $(".close-popup").click(function(){
    $(".enq-overlay, .popup-box").fadeOut()
  })
  

  $(".coupon-text").click(function(){
    $(".toggle-coupon-box").slideToggle();
    $(".fa").toggleClass("active");
  })

  $(".pay-mode-box").click(function(){
    $(this).siblings(".pay-mode-box").removeClass("active");
    $(this).toggleClass("active");
  })

  $(document).on("click", ".pro-cnt-box.show .remove-prod", function(){
    var $qty=$(this).next('#pro-cnt');
    var cVal = parseInt($qty.val());
    if (cVal == 1) {
      $(this).parent().show();
    }
  });

  $(".checkout-box .heading02").click(function(){
    $(this).next(".toggle-box").slideToggle();
    $(this).parent().siblings(".checkout-box").find(".toggle-box").slideUp();
    $(this).parent().siblings(".checkout-box").find(".heading02").children(".drpdown-arrow").removeClass("active");
    $(this).children(".drpdown-arrow").toggleClass("active");
  })

  $(".show-qty, .qty-btn").click(function(){
    $(this).parents('.product-box').find(".qty-popup").show();
    $(this).parents('.product-box').find(".qty-popup-overlay").show();
    $(this).parents('.prod-cart-dlt').find(".qty-popup").show();
    $(this).parents('.prod-cart-dlt').find(".qty-popup-overlay").show();
  });

  $(".show-months, .qty-btn").click(function(){
    $(this).parent().parent().parent().find(".qty-popup1").show();
    $(this).parent().parent().parent().find(".qty-popup-overlay1").show();
  });

  $(".close-popup").click(function(){
    $(".qty-popup1").hide();
    $(".qty-popup-overlay1").hide();
  });

  $(".close-popup").click(function(){
    $(".qty-popup").hide();
    $(".qty-popup-overlay").hide();
  });

  $('.product-slider').owlCarousel({
    loop: true,
    items: 2,
    responsiveClass: true,
    //autoplay: true,
    slideSpeed: 1000,
    paginationSpeed: 900,
    autoplayTimeout: 3000,
    smartSpeed: 2000,
    dots: true,
    margin: 10,
  });

  var pro = $(".product-slider .owl-item").length;
  if(pro <= 2){
    $(".product-slider .owl-controls").hide();
  }


  $(document).on("click", ".qty-popup .click-text-field", function(){
    qty = parseInt($(this).prev().val())
    if(qty > 0){
      $(".error_msg").text("");
      $(".qty-popup").hide();
      $(".qty-popup-overlay").hide();
      id = $(this).attr('for')
      console.log(id + "asdas asd")
      $('#'+id).html('Qty '+qty)
      seo_name = $(this).attr('data')
      variant_id = $(this).attr('variant_id')
      $(".qty-btn_"+id).css("display", "inline-block");
      $(".show-qty_"+id).hide();
      af = $('#'+id).attr('for')
      if(af == 'NA'){
        $.getScript('/line_items/new?product='+seo_name+'&qty='+qty+'&variant_id='+variant_id)
      }else{
        $.getScript('/change_qty?id='+$('#'+id).attr('for')+'&val='+qty+'&src=list')
      }
    }else{
      $(".error_msg").text("Invalid Quantity.")
    }
    
  });

   $(document).on("click", ".add-to-cart-directly", function(){
    id = $(this).attr('for')
    seo_name = $(this).attr('data')
    variant_id = $(this).attr('variant_id')
    $('#'+id).html('Qty '+$(this).html())
    $(this).parent().parent().parent().find(".qty-btn").css("display", "inline-block");
    $(this).parent().parent().parent().find(".show-qty").hide();
    af = $('#'+id).attr('for')
    if(true){
      $.getScript('/line_items/new?product='+seo_name+'&qty=1&variant_id='+variant_id)
    }else{
      $.getScript('/change_qty?id='+$('#'+id).attr('for')+'&val='+$(this).html()+'&src=list')
    }
  });  


  $(document).on("click", ".qty-popup li", function(){
    $(".qty-popup").hide();
    $(".qty-popup-overlay").hide();
    id = $(this).attr('for')
    seo_name = $(this).attr('data')
    variant_id = $(this).attr('variant_id')
    $('#'+id).html('Qty '+$(this).html())
    $(this).parent().parent().parent().find(".qty-btn").css("display", "inline-block");
    $(this).parent().parent().parent().find(".show-qty").hide();
    af = $('#'+id).attr('for')
    if(af == 'NA'){
      $.getScript('/line_items/new?product='+seo_name+'&qty='+$(this).html()+'&variant_id='+variant_id)
    }else{
      $.getScript('/change_qty?id='+$('#'+id).attr('for')+'&val='+$(this).html()+'&src=list')
    }
  });


  $(document).on("click", ".qty-popup1 li", function(){
    $(".qty-popup1").hide();
    $(".qty-popup-overlay1").hide();
    id = $(this).attr('for')
    seo_name = $(this).attr('data')
    variant_id = $(this).attr('variant_id')
    $('#'+id).html('Months '+$(this).html())
    $(this).parent().parent().parent().find(".qty-btn").css("display", "inline-block");
    $(this).parent().parent().parent().find(".show-months").hide();
    af = $('#'+id).attr('for')
    if(af == 'NA'){
      $.getScript('/line_items/new?product='+seo_name+'&months='+$(this).html()+'&variant_id='+variant_id)
    }else{
      $.getScript('/change_qty?id='+$('#'+id).attr('for')+'&val='+$(this).html()+'&src=list')
    }
  });

  $(document).on('change', '.product_variant', function(){
    ele = $(this).children("option:selected")
    seo_name = $(this).attr('for')
    image = ele.attr('image')
    line_id = ele.attr('data')
    id = ele.val()
    main_price = ele.attr('price')
    mrp_price = ele.attr('mrp')
    discount = (mrp_price - main_price)*100/mrp_price
    $(this).parent().parent().parent().find('.main_price').html(parseInt(main_price))
    if(parseInt(mrp_price) > 0 && parseInt(mrp_price) > parseInt(main_price)){
      $(this).parent().parent().parent().find('.mrp_price').html(parseInt(mrp_price))
      $(this).parent().parent().parent().find('.mrp_price').prev().show()
      $(this).parent().parent().parent().find('.discount').removeAttr('style')
      $(this).parent().parent().parent().find('.discount').html(Math.ceil(discount)+'% off')
    }else{
      $(this).parent().parent().parent().find('.mrp_price').html('')
      $(this).parent().parent().parent().find('.mrp_price').prev().hide()
      $(this).parent().parent().parent().find('.discount').html('')
      $(this).parent().parent().parent().find('.discount').css('padding', '0px')
    }
    if(image == ''){
      $(this).closest('.product-box').find('img').attr('src', $(this).closest('.product-box').find('img').attr('for'))
    }else{
      $(this).closest('.product-box').find('img').attr('src', image)
    }
    $('.product_variant_'+seo_name+' li').attr('variant_id', id)
    if(line_id != ''){
      $.getScript('/change_qty?id='+line_id+'&variant_id='+id+'&src=list')
    }
  })

  $(document).on('click', '.variant_li', function(){
    $('.variant_li').removeClass('active')
    $(this).addClass('active')
    line_id = $(this).attr('data')
    id = $(this).attr('value')
    seo_name = $(this).parent().attr('for')
    $('.product_variant_'+seo_name+' li').attr('variant_id', id)
    if(line_id != ''){
      $.getScript('/change_qty?id='+line_id+'&variant_id='+id+'&src=list')
    }
  })


  $(".list-image li").click(function(){
    var imgUrl = $(this).children("img").attr("src");
    $(".list-image li").removeClass("active");
    $(".dlt-img").children("img").attr("src", imgUrl);
    $(this).addClass("active");
  })


  $(".search").click(function(){
    $(".search-box").show();
    $(".tab-header").hide();
  })

  $(".search-btn").click(function(){
    $(".search-box").hide();
    $(".tab-header").show();
  })

  $(".inquire-now").click(function(){
    $(".popup-overlay, .inq-popup").fadeIn();
  })

  $(".close-popup").click(function(){
    $(".popup-overlay, .inq-popup").fadeOut();
  })


  
  $(".show-oh").click(function(){
    $(".otp-overlay").show();
  })

  $(".close-otp").click(function(){
    $(".otp-overlay").hide();
  })

  
  $('.select-city').select2();
  
  $(".inq-btn-box").click(function(){
      var dataPopup = $(this).attr("data-popup");
      $("#"+dataPopup).show();
      $(".enq-overlay").show();
    })

  $(".categ li").click(function(){
      $(this).addClass("active");
      $(this).siblings().removeClass("active");
    })

  if($(window).width() < 768){
    $(".select-categeries").click(function(){
    $(".categ").slideToggle();
    });
   
    $(".categ li").click(function(){
      var tText = $(this).text();
      $(this).parent(".categ").prev(".select-categeries").text(tText);
      $(this).parent(".categ").slideUp();

    })
  }


});



// window load function
$(window).load(function(){

	
	
});