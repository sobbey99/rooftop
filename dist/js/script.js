//ARROW UP
$(window).scroll(function() {
    if ($(this).scrollTop() >1100 ) {
        $('.arrow-up').fadeIn('slow');
    } else {
        $('.arrow-up').fadeOut('fast');
    }
});

//SMOOTH SCROLLING
$(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
                return false;
        });
});


// WOW JS
new WOW().init();

//VALIDATION
function ValidationForm(selector) {
    $(selector).validate( {
        rules: {
            username: "required",
            userphone: "required"
        },
        messages: {
            username: {
                required: "Introduceți numele!"
            },
            userphone: {
                required: "Introduceți numărul de telefon"
            }
        }
    })
};
ValidationForm('.questions-form');
ValidationForm('.form');

//PHONE MASK
$('[name="userphone"]').mask("+373 (99) 999-999");