document.addEventListener("DOMContentLoaded", function () {
	var nextBtn = document.querySelector(".bestseller-right");
	var prevBtn = document.querySelector(".bestseller-left");

	if (!nextBtn || !prevBtn) return;

	new Swiper(".bestseller-games-list", {
		loop: false,
		speed: 500,
		grabCursor: true,
		spaceBetween: 16,
		watchOverflow: true,
		breakpoints: {
			0: { slidesPerView: 1, spaceBetween: 8 },
			480: { slidesPerView: 2, spaceBetween: 10 },
			768: { slidesPerView: 3, spaceBetween: 12 },
			1024: { slidesPerView: 4, spaceBetween: 14 },
			1600: { slidesPerView: 5, spaceBetween: 16 },
			1601: { slidesPerView: 6, spaceBetween: 16 },
		},
		navigation: {
			nextEl: nextBtn,
			prevEl: prevBtn,
		},
	});
});
