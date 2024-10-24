$(document).ready(function(){
	$('.carousel').slick({
		autoplay: false,
		autoplaySpeed: 5000,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 0,
		arrows: false,
		dots: false,
		fade: false,

        responsive:[{
            breakpoint:768,
            settings:{
                centerMode: true,
                centerPadding: '3.2rem',
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
            },
        },
    ]
	});

});