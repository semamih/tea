$(document).ready(function () {

    new WOW(
        {
            animateClass: 'animate__animated',
        }
    ).init();

    $('.carousel').slick({
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        prevArrow: '<div class="slick-prev"></div>',
        nextArrow: '<div class="slick-next"></div>'
    });

    $( function() {
        $( "#accordion" ).accordion(
            {
                icons: {
                    header: "custom-icon-open",
                    activeHeader: "custom-icon-close",
                },
            }
        );
    } );

    let name = $("#name");
    let surname = $("#surname");
    let phone = $("#phone");
    let country = $("#country");
    let index = $("#index");
    let address = $("#address");


    $('#index').keydown(function(e) {
        // Проверяем нажатие клавиши
        if (isNaN(parseInt(e.key)) && e.key !== "Backspace") {
            return false;
        }

        // Проверяем длину поля ввода
        if ($(this).val().length >= 6 && e.key !== "Backspace") {
            return false;
        }
    });


    $("#button").click(function () {
        if(!name.val()) {
            alert("Введите имя!");
            return;
        }
        if(!surname.val()){2
            alert("Введите фамилию!");
            return;
        }
        if(!phone.val()) {
            alert("Введите номер телефона!");
            return;
        }
        if(!country.val()){
            alert("Введите страну!");
            return;
        }
        if(!index.val()){
            alert("Введите индекс!");
            return;
        }
        if(!address.val()){
            alert("Введите адрес!");
            return;
        }

        $("#order-block").css("display", "none");
        alert("Спасибо за заказ! Мы свяжемся с вами в ближайшее время!");
    });



})


