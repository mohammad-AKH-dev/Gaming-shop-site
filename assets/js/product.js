let reviewDescriptionWrapper = document.querySelector(
  ".review-description__wrapper"
);
let reviewDescriptionSpans = document.querySelectorAll(
  ".review-description__wrapper span"
);
let descriptionReviewsContents = document.querySelectorAll(
  ".review-description-content__wrapper p"
);
let relatedGamesWrapper = document.querySelector(".related-games__boxes");
let gameImg = document.querySelector(".information-left img");
let gameTitle = document.querySelector(".information-title");
let gamePrice = document.querySelector(".information__price");
let gameDiscount = document.querySelector(".information__discount");
let gameID = document.querySelector(".Game-id__value");
let productDetailsTitle = document.querySelector(".product-details__title");
let productDetailsName = document.querySelector(".product-details__name");
let urlSearchParams = new URLSearchParams(location.search);

// review and description section

reviewDescriptionWrapper.addEventListener("click", (event) => {
  if (event.target.tagName === "SPAN") {
    reviewDescriptionSpans.forEach((span) => {
      span.classList.remove("active");
    });
    event.target.classList.add("active");

    for (let content of descriptionReviewsContents) {
      if (`${content.dataset.name} active` === event.target.className) {
        content.classList.add("active");
      } else {
        content.classList.remove("active");
      }
    }
  }
});

// related games section

async function getRelatedGames() {
  const data = [
    { id: "11", img: "assets/images/categories-01.jpg" },
    { id: "12", img: "assets/images/categories-02.jpg" },
    { id: "13", img: "assets/images/categories-03.jpg" },
    { id: "14", img: "assets/images/categories-04.jpg" },
    { id: "15", img: "assets/images/categories-05.jpg" },
  ];
  const games = data.forEach((game) => {
    relatedGamesWrapper.insertAdjacentHTML(
      "beforeend",
      `
          <div class="related-game__box">
                <p class="related-game__genre">Action</p>
              <a href="product-details.html?id=${game.id}" class="related-game__link">
              <img src="${game.img}" class="related-game__img">
              </a>
            </div>
        `
    );
  });
}

// dynamic information

async function dynamicTags() {
  let gameName = Number(urlSearchParams.get("id"));
  if (gameName) {
    const games = [
      {"id": "1", "title": "Warframe","img":"assets/images/top-game-01.jpg","kind":"Adventure","price":33
    ,"discount": 29},
      {"id": "2", "title": "PUBG","img":"assets/images/top-game-02.jpg","kind":"Adventure","price":40
    ,"discount": 35},
      {"id": "3", "title": "Apex Legends","img":"assets/images/top-game-03.jpg","kind":"Adventure","price":24
    ,"discount": 20},
      {"id": "4", "title": "Sims 4","img":"assets/images/top-game-04.jpg","kind":"Adventure","price":30
    ,"discount": 25},
      {"id": "5", "title": "Lostark","img":"assets/images/top-game-05.jpg","kind":"Adventure","price":50
    ,"discount": 40},
      {"id": "6", "title": "Destiny 2","img":"assets/images/top-game-06.jpg","kind":"Adventure","price":20
    ,"discount": 15},
      {"id": "7", "title": "Warframe","price":28,"discount":22,
      "img":"assets/images/trending-01.jpg","kind": "Strategy"},
      {"id": "8", "title": "Genshin Impact","price":44,"discount":30,
      "img":"assets/images/trending-02.jpg","kind": "Strategy"},
      {"id": "9", "title": "League of legends","price":64,"discount":44,
      "img":"assets/images/trending-03.jpg","kind": "Strategy"},
      {"id": "10", "title": "Dragon","price":28,"discount":22,
      "img":"assets/images/trending-04.jpg","kind": "Strategy"},
      {"id": "11","title":"BrawlHalla" ,"img":"assets/images/categories-01.jpg","price":30,"discount":25,"kind":"Racing"},
      {"id": "12","title":"Dota 2" ,"img":"assets/images/categories-02.jpg","price":27,"discount":22,"kind":"Racing"},
      {"id": "13","title":"Tower of destiny" ,"img":"assets/images/categories-03.jpg","price":14,"discount":10,"kind":"Racing"},
      {"id": "14","title":"super people" ,"img":"assets/images/categories-04.jpg","price":44,"discount":36,"kind":"Racing"},
      {"id": "15","title":"Warframe" ,"img":"assets/images/categories-05.jpg","price":50,"discount":40,"kind":"Racing"},
      {"id": "16", "title": "Warframe","img":"assets/images/top-game-01.jpg","kind":"Adventure","price":33
    ,"discount": 29,"kind":"Racing"},
      {"id": "17", "title": "PUBG","img":"assets/images/top-game-02.jpg","kind":"Adventure","price":40
    ,"discount": 35},
      {"id": "18", "title": "Apex Legends","img":"assets/images/top-game-03.jpg","kind":"Strategy","price":24
    ,"discount": 20},
      {"id": "19", "title": "Sims 4","img":"assets/images/top-game-04.jpg","kind":"Racing","price":30
    ,"discount": 25},
      {"id": "20", "title": "Lostark","img":"assets/images/top-game-05.jpg","kind":"Strategy","price":50
    ,"discount": 40},
      {"id": "21", "title": "Destiny 2","img":"assets/images/top-game-06.jpg","kind":"Strategy","price":20}
    ]
    const game = games.find(game => +game.id === gameName)
    gameImg.src = game.img;
    gameTitle.innerHTML = game.title;
    gamePrice.innerHTML = `$${game.price}`;
    gameDiscount.innerHTML = `$${game.discount}`;
    gameID.innerHTML = game.title;
    productDetailsTitle.innerHTML = game.title;
    productDetailsName.innerHTML = game.title;
    productDetailsName.href = `product-details.html?id=${game.id}`;
  } else {
    gameImg.src = "assets/images/single-game.jpg";
    gameTitle.innerHTML = "Call of Duty®: Modern Warfare® II";
    gamePrice.innerHTML = "$28";
    gameDiscount.innerHTML = "$22";
    gameID.innerHTML = "COD MMII";
    productDetailsTitle.innerHTML = "Modern Warfare® II";
    productDetailsName.innerHTML = "Modern Warfare® II";
    productDetailsName.href = `product-details.html`;
  }
}

window.addEventListener("load", () => {
  dynamicTags();
  getRelatedGames();
});
