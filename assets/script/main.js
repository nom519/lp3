$(document).ready(function(){
	$('.carousel').slick({
		autoplay: false,
		autoplaySpeed: 5000,
        infinite: false,
        slidesToShow: 3,
		arrows: false,
		dots: false,
		fade: false,

        responsive:[{
            breakpoint:768,
            settings:{
                infinite: true,
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