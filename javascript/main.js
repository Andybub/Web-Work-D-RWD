$(document).ready(function(){

    $('a').click(function(e){

        e.preventDefault();

    })

    // menu

    $('nav > a').click(function(e){

        $('.modal-container').fadeIn();

    })

    $('.modal > a').click(function(e){

        $('.modal-container').fadeOut();

    })

    // chatbox

    $('.message > a').click(function(e){

        $('.chat-box').toggle();

    })

    // lists

    $('.lists > div > a').click(function(e){

        $(this).siblings('ul').slideToggle();

    })

    // languages

    $('.languages > a').click(function(e){

        e.stopPropagation();

        $('.drop-down').toggle();

    })

        // blur effect
    $('body').click(function(e){

        $('.drop-down').hide();

    })

    $('.drop-down li').click(function(e){

        let index = $(this).index();

        $('.languages > a').removeClass('active').eq(index).addClass('active');

    })

    // fixed header on scroll up

    let previousScroll = 0;
    
    let headerInitOffset = $('header').offset().top;

    $(window).scroll(function(){

        let currentScroll = $(this).scrollTop();

        if (currentScroll > headerInitOffset) {

            if (currentScroll > previousScroll) {
    
                $('header').slideUp("fast");
    
            } else {
    
                $('header').slideDown("fast");

                $('header').addClass('fixed');
    
            }

        } else {

            $('header').removeClass('fixed');

        }

        previousScroll = currentScroll;

    })

})