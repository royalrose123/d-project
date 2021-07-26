// JavaScript Document

$(document).ready(function(){

	sitemapHeight();

    $('.f1_a').hoverToggle();
    $('.deploy-sidebar').offCanvas();
    $('.submenu-deploy').click(function(){
		$(this).parent().find('.nav-submenu').toggle(100);
		$(this).parent().find('.sidebar-decoration').toggle(100);
		$(this).find('em').toggleClass('dropdown-item');
		return false;
	});
	
	$('.wide-image a').click(function(){
		$(this).parent().parent().find('.wide-active').toggle(100);
	});
	
	$('.update-button').click(function(){
		$(this).parent().find('.page-update-text').toggle(100);
		$(this).parent().find('.update-icon').toggleClass('active-update-icon');
	});
	
	$('.style-changer').click(function(){
		return false;
	});
	
	$('.shortcut-search').click(function(){
		$('.sidebar-shortcuts').hide();
		$('.sidebar-search').show();
	});
	
	$('.search-close').click(function(){
		$('.sidebar-search').hide();
		$('.sidebar-shortcuts').show();
	});

  $('.tab_filter_m').find('a').on('click',function(){
    var that = $('.tab_filter');
    if(!that.hasClass('is-open')){
      that.addClass('is-open');
    } else {
      that.removeClass('is-open');
    }
    return false;
  })

  $('.invoice_section').find('.bu a').on('click', function(e){
  	e.preventDefault();
  	$(this).parents('.story_in').addClass('edit-mode');
  })
  $('.invoice_section').find('.cancel').on('click', function(){
  	$(this).parents('.story_in').removeClass('edit-mode');
  })

// 行動版小幫手
var w = $(window);
w.scroll(function(){
  var booking = $('.booking_popup_m'),
      scroll = getScrollTop();
  if(scroll > 60){
    booking.addClass('is-fixed');
  } else {
    booking.removeClass('is-fixed');
  }
})


});

function getScrollTop() {
    if (typeof window.pageYOffset !== 'undefined') {
        return window.pageYOffset;
    }

    var d = document.documentElement;
    if (d.clientHeight) {
        return d.scrollTop;
    }
    return document.body.scrollTop;
}

// sitemap page set height
function sitemapHeight() {
	var WindowWidth = $(window).width();
	var WindowHeight = $(window).height();
	// console.log(WindowHeight);
	if($('.sitemap_alpha').length > 0){
		$('body').css({
			overflow : 'hidden'
		})
		$('.all-elements').css({
			height : WindowHeight
		})
		if(WindowHeight > 410){
			$('.sitemap_pad').css({
				'height' : WindowHeight
			})
			if(WindowWidth > 768){
				$('.sitemap_pad').css({
					'height' : 'auto'
				})
			}
		} else {
			$('.sitemap_pad').css({
				'height' : 410
			})
		}
	}
}



// define extend
$.fn.extend({

  hoverToggle: function(callback) {
    callback = callback || function() {};

    $(this).on({
      mouseenter: function(){
        $(this).find(".f1_cn").css({
          "width":$(this).find(".f1").width(),
          "height":$(this).find(".f1").height()
        }).css("display","block");  
        $(this).find(".f1").hide(); 
      },
      mouseleave: function(){
        $(this).find(".f1_cn").hide();
        $(this).find(".f1").css("display","block"); 
      }
    })
  },

  offCanvas: function(callback) {
    callback = callback || function() {};
    var $self = $(this);

    $self.on('click', function(e) {
      e.preventDefault();

      var $that = $(e.target),
          $wrap = $that.parents('.all-elements');

      if (true === $wrap.hasClass('is-open')) {
        $wrap.removeClass('is-open');
      } else {
        $wrap.addClass('is-open');
      }
    });
  }
});