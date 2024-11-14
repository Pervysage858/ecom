
 //upload images

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function(e) {
        $(input).parent().hide();
        $(input).parent().next().find('img').attr('src', e.target.result);
        $(input).parent().next().show();
        $(input).parent().next().find('input').val('0')

        $('.image-title').html(input.files[0].name);
      };
      reader.readAsDataURL(input.files[0]);
    } else {
      removeUpload(input);
    }
  }

  function removeUpload(input) {
    // $('.file-upload-input').hide();
    // $('.file-upload-content').hide();
    // $('.image-upload-wrap').show();
    $(input).next().val('1')
    $(input).prev().attr('src', '')
    $(input).parent().hide()
    $(input).parent().prev().show()
  }
  $('.image-upload-wrap').bind('dragover', function () {
    $('.image-upload-wrap').addClass('image-dropping');
  });
  $('.image-upload-wrap').bind('dragleave', function () {
    $('.image-upload-wrap').removeClass('image-dropping');
  });


// document ready function
$(document).ready(function(){

  if($(window).width() < 767){
    $("#google_translate_element").insertAfter(".header");
  }


  setTimeout(function(){
    $(".success_msg .close").trigger("click")
  }, 1000)


  $(".menu-btn").click(function(){
    $(".side-menubar").toggleClass("active");
    $(this).toggleClass("close-menu");
  })

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

  $(".message").prev("input").addClass("error");

  $(document).on("click", ".remove-prod", function(){
    var $qty=$(this).next('#pro-cnt');
    var cVal = parseInt($qty.val());
    if (!isNaN(cVal) && cVal > 1) {
      $qty.val(cVal - 1);
    }
    if (cVal == 1) {      
      $(this).parent().prev(".cart-btn").show();
      $(this).parent().hide();
    }
  })

  $(document).on("click", ".pro-cnt-box.show .remove-prod", function(){
    var $qty=$(this).next('#pro-cnt');
    var cVal = parseInt($qty.val());
    if (cVal == 1) {
      $(this).parent().show();
    }
  });
  

  $(window).scroll(function(){
    var hH = $("#header").outerHeight();
    if($(this).scrollTop() > hH){
      $(".tab-header").addClass("sticky")
    } else{
      $(".tab-header").removeClass("sticky")
    }
  })

  $(".search").click(function(){
    $(".search-box").show();
    $(".tab-header").hide();
  })

  $(".search-btn").click(function(){
    $(".search-box").hide();
    $(".tab-header").show();
  });


  $(".close-step-popup").click(function(){
    $(".step-overlay, .step-container").fadeOut();
  });
  

  $(".tab-header li").click(function(){
    $(this).parent().parent().next().find(".tab-box").siblings().removeClass("active");
    var dataTab = $(this).attr("data-tab");
    $("#"+dataTab).addClass("active");
    $(this).siblings().removeClass("active");
    $(this).addClass("active");

  });


  $(".show-status").click(function(){
    $(this).next().toggle();
  });

  $(".can-status").click(function(){
    $(".status-box").hide();
  });

  $(".add-no").click(function(){
    $("#add-number").show();
  });

  bCumb = ($('.bread-crumb-info').offset() || { "top": NaN }).top;
  $(window).scroll(function(){
    if($(this).scrollTop() > bCumb){
      $(".fixed-container").addClass("fixed");    
    } else{
      $(".fixed-container").removeClass("fixed");
    }
  })

  winW = $(window).width();
  if(winW >= 1024){
    var maxHeight = 0;
    $(".payment-box").each(function(){
      if ($(this).height() > maxHeight) { 
        maxHeight = $(this).height(); 
      }
    });
    $(".payment-box").height(maxHeight);    
  }

  $('textarea').on('keydown', function(e){
    var that = $(this);
    if (that.scrollTop()) {
      $(this).height(function(i,h){
          return h + 20;
      });
    }
  });

  $(".popup-btn").click(function(){
    var popHref = $(this).attr("data-href");
    $("#"+popHref).show();
    $(".form-overlay").show();
    
  });

  $(".close-form, .form-overlay").click(function(){
    $(".form-popup, .form-overlay").hide();
  })

});

// window resize function
$(window).resize(function(){
  winW = $(window).width();
  if(winW >= 1024){
    var maxHeight = 0;
    $(".payment-box").each(function(){
      if ($(this).height() > maxHeight) { 
        maxHeight = $(this).height(); 
      }
    });
    $(".payment-box").height(maxHeight);    
  }
});

// window load function
$(window).load(function(){
  winW = $(window).width();
  if(winW >= 1024){
    var maxHeight = 0;
    $(".payment-box").each(function(){
      if ($(this).height() > maxHeight) { 
        maxHeight = $(this).height(); 
      }
    });
    $(".payment-box").height(maxHeight);    
  }
});



$(document).ready(function(){
  $('.fancybox-media').fancybox({
    openEffect  : 'none',
    closeEffect : 'none',
    helpers : {
      media : {}
    }
  });
  $('.fancy-img').fancybox();
  
});
