$(function () {
    $('.about__popup-link').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
    });

    // $('.gallery__slider').slick({
    //     prevArrow: '<button class="slick-prev slick-arrow" aria-label="Prev" type="button" style=""><img src="images/arrow-prev.svg"></button>',
    //     nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><img src="images/arrow-next.svg"></button>'
    // });

    $('.gallery__wrapper').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });

    $(document).ready(function () {
        $('.gallery__slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            prevArrow: '.slick-prev',
            nextArrow: '.slick-next'
        });
    });
});