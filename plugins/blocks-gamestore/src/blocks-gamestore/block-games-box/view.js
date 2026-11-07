document.addEventListener("DOMContentLoaded", function () {
	const filterForm = document.querySelector(".games-filter form");
	const sortingForm = document.querySelector(".custom-sort form");
	const gamesList = document.querySelector(".games-list");

	if (!filterForm || !gamesList) return;

	let currentPage = 1;

	filterForm.addEventListener("change", () => {
		currentPage = 1;
		submitForm(false);
	});

	if (sortingForm) {
		sortingForm.addEventListener("change", () => {
			currentPage = 1;
			submitForm(false);
		});
	}

	// reset без рекурсии
	const resetBtn = filterForm.querySelector(
		'button[type="reset"], .reset-filters',
	);
	if (resetBtn) {
		resetBtn.addEventListener("click", (e) => {
			e.preventDefault();
			filterForm.reset();
			if (sortingForm) sortingForm.reset();
			currentPage = 1;
			submitForm(false);
		});
	}

	function submitForm(append = false) {
		const formData = new FormData(filterForm);
		const sortingData = sortingForm
			? new FormData(sortingForm)
			: new FormData();

		const selectedLanguages = [
			...document.querySelectorAll('input[name^="language-"]:checked'),
		].map((cb) => cb.name.replace("language-", ""));
		const selectedGenres = [
			...document.querySelectorAll('input[name^="genre-"]:checked'),
		].map((cb) => cb.name.replace("genre-", ""));

		fetch(gamestore_params.ajaxurl, {
			method: "POST",
			body: new URLSearchParams({
				action: "filter_games",
				page: currentPage,
				post_per_page: formData.get("posts_per_page") || "",
				current_cat: formData.get("current_cat") || "",
				platforms: formData.get("platforms") || "",
				publisher: formData.get("publisher") || "",
				singleplayer: formData.get("singleplayer") || "",
				released: formData.get("released") || "",
				languages: selectedLanguages.join(","),
				genres: selectedGenres.join(","),
				sort: sortingData.get("sorting") || "",
			}),
		})
			.then((r) => r.text())
			.then((data) => {
				const trimmed = data.trim();
				if (!trimmed) return;
				if (
					trimmed === "0" ||
					trimmed === "-1" ||
					/^<!DOCTYPE/i.test(trimmed)
				) {
					console.error(
						"filter_games: unexpected response",
						trimmed.slice(0, 300),
					);
					return;
				}

				// 1) обновляем карточки
				if (append) gamesList.insertAdjacentHTML("beforeend", data);
				else gamesList.innerHTML = data;

				// 2) чистим пагинацию (она не приходит в AJAX-ответе)
				const pagination = document.querySelector(
					".games-box-list .wp-block-query-pagination",
				);
				if (pagination) pagination.remove();

				// 3) если пришло "No games found" — пагинация уже удалена, всё ок
			})
			.catch((err) => console.error("filter_games error:", err));
	}
});
