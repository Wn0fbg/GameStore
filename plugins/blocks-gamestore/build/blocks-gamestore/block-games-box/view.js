/******/ (() => { // webpackBootstrap
/*!******************************************************!*\
  !*** ./src/blocks-gamestore/block-games-box/view.js ***!
  \******************************************************/
document.addEventListener("DOMContentLoaded", function () {
  const filterForm = document.querySelector(".games-filter form");
  const loadMoreButton = document.querySelector(".load-more-button");
  let currentPage = 1;
  filterForm.addEventListener("change", function () {
    currentPage = 1;
    submitForm(false);
  });
  filterForm.addEventListener("reset", function () {
    currentPage = 1;
    setTimeout(() => {
      submitForm(false);
    }, 100);
  });
  loadMoreButton.addEventListener("click", function () {
    currentPage++;
    submitForm(true);
  });
  function submitForm(append = false) {
    const formData = new FormData(filterForm);
    const selectedLanguages = [];
    document.querySelectorAll("input[name^='language-']:checked").forEach(checkbox => {
      selectedLanguages.push(checkbox.name.replace("language-", ""));
    });
    const selectedGenres = [];
    document.querySelectorAll("input[name^='genre-']:checked").forEach(checkbox => {
      selectedGenres.push(checkbox.name.replace("genre-", ""));
    });
    fetch(gamestore_params.ajaxurl, {
      method: "POST",
      body: new URLSearchParams({
        action: "filter_games",
        page: currentPage,
        post_per_page: formData.get("posts_per_page"),
        platforms: formData.get("platforms"),
        publisher: formData.get("publisher"),
        singlePlayer: formData.get("singleplayer"),
        released: formData.get("released"),
        languages: selectedLanguages.join(","),
        genres: selectedGenres.join(",")
      })
    }).then(response => response.text()).then(data => {
      const gamesListContainer = document.querySelector(".games-list");
      if (append) {
        gamesListContainer.innerHTML += data;
      } else {
        gamesListContainer.innerHTML = data;
      }
    }).catch(error => console.error("Error", error));
  }
});
/******/ })()
;
//# sourceMappingURL=view.js.map