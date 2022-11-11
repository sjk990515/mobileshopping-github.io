 /****************************/
 /****************************/
 /****************************/
/*index*/

$(document).ready(function(){
	$('.menu').css({
		right:"-100000px"
	});

	(function($) {
		$('#header__icon').click(function(e){
			e.preventDefault();
			$('body').toggleClass('with--sidebar');
			$('.menu').css({
				display:"block",
				right:"-80%"
			});
		});
    
    $('#site-cache').click(function(e){
        $('body').removeClass('with--sidebar');
	    $('.menu').css({
			right:"-100000px"
	    });
    });

	$('.menu_out').click(function(e){
        $('body').removeClass('with--sidebar');
	    $('.menu').css({
			right:"-100000px"
	    });
    });

	})(jQuery);

	(function($){$(document).ready(function(){$('#cssmenu li.active').addClass('open').children('ul').show();
	$('#cssmenu li.has-sub>a').on('click', function(){
		$(this).removeAttr('href');
		var element = $(this).parent('li');
		if (element.hasClass('open')) {
			element.removeClass('open');
			element.find('li').removeClass('open');
			element.find('ul').slideUp(200);
		}
		else {
			element.addClass('open');
			element.children('ul').slideDown(200);
			element.siblings('li').children('ul').slideUp(200);
			element.siblings('li').removeClass('open');
			element.siblings('li').find('li').removeClass('open');
			element.siblings('li').find('ul').slideUp(200);
		}
	});});})(jQuery);
});

$(document).ready(function(){
	//main_visual
	$(".visual_slider").slick({
		autoplay: true,
		fade:true,
		autoplaySpeed:4000,
		arrows: false,
		dots: true,
		infinite: true,
		speed:500,
		lazyLoad: "progressive", 
		pauseOnHover: false
	}).slickAnimation();

	$(".best_slide").slick({
		autoplay:true,
		infinite:true,
		slidesToShow:2,
		slidesToScroll:1,
		dots:true,
		arrows:false,
		speed:500,
		focusOnSelect:true,
		variableWidth:true,
	});

	$(".md_slide").slick({
		autoplay:false,
		infinite:true,
		centerMode: true,
		centerPadding: '00px',
		slidesToShow:1,
		slidesToScroll:1,
		dots:true,
		arrows:false,
		speed:500,
		focusOnSelect:true,
		variableWidth:false,
	});

	$(".new_slide").slick({
		autoplay:false,
		infinite:true,
		centerMode: false,
		centerPadding: '00px',
		slidesToShow:1,
		slidesToScroll:1,
		dots:true,
		arrows:false,
		speed:500,
		focusOnSelect:true,
		variableWidth:false,
	});
});
//brand
$(document).ready(function(){
	$(".brand_content").hide();
	$(".brand_content:first").show();

	$(".brand > ul li").click(function(){
		$(".brand > ul li").removeClass("active");
		$(this).addClass("active");
		$(".brand_content").hide();
		var activeTab = $(this).attr("rel");
		$("#" + activeTab).show();
	});
});

 /****************************/
 /****************************/
 /****************************/
 /*menu*/
$(document).ready(function(){
	//menu_best_slide
	$(".menu__best__slide").slick({
		autoplay:true,
		infinite:true,
		centerMode: false,
		centerPadding: '0',
		slidesToShow:1,
		slidesToScroll:1,
		dots:true,
		arrows:false,
		speed:500,
		focusOnSelect:true,
		variableWidth:false,
	});
});

 /****************************/
 /****************************/
 /****************************/
 /*menu_detail*/
 $(document).ready(function(){
	//other_slide
	$(".other_slide").slick({
		autoplay:false,
		infinite:true,
		centerMode: false,
		centerPadding: '0',
		slidesToShow:3,
		slidesToScroll:1,
		dots:true,
		arrows:false,
		speed:500,
		focusOnSelect:true,
		variableWidth:false,
	});
});