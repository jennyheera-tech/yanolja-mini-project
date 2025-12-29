// 플러그인 스크립트

//visual 스와이프
let visualSwiper = null;

var swiper = new Swiper('.mySwiper', {
    scrollbar: {
        el: '.swiper-scrollbar',
        hide: true,
    },
});

//section1 사업소개 스와이프

const bsnSwiper = new Swiper(".bsnSwiper", {
    slidesPerView: "auto",
    spaceBetween: 20,
    pagination: {
    el: '.swiper-pagination',
    clickable: true,
},
});
// gsap 스크립트 등
