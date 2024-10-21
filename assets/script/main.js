$(document).ready(function(){
	$('.carousel').slick({
		autoplay: false,
		autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
		arrows: false,
		dots: true,
		fade: false,

        responsive:[{
            breakpoint:768,
            settings:{
                centerMode: true,
                centerPadding: '3rem',
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ]
	});

});