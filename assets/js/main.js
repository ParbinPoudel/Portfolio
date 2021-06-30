// active menu item
$("nav-link.active").next();
$(".nav-link").on("click", function () {
    if ($(this).hasClass('active')) {
        $(this).removeClass("active").next();
    } else {
        $(".nav-link.active").removeClass("active").next(".side-nav__item");
        $(this).addClass('active').next('.side-nav__item');
    }
});

// Responsive Navbar Toggle
const navBar = document.getElementById("menu");
const navMenu = document.getElementById("responsive-navigation");

navBar.addEventListener("click", function () {
	navMenu.classList.toggle("active");
	navBar.classList.toggle("active");
});

// services__slider
$('.services__slider').slick({
    dots: false,
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:"<button class='slick-prev slick-arrow' aria-label='Previous' type='button'><i class='icon-arrow-left'></i></button>",
    nextArrow:"<button class='slick-next slick-arrow' aria-label='Next' type='button'><i class='icon-arrow-right'></i></button>",
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                arrows: true,
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 992,
            settings: {
                arrows: true,
                infinite: true,
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});