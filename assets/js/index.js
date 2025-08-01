import { initSwiper } from "./swiper.js";

const trendingGamesContainer = document.querySelector(
  ".trending-games__container"
);
const mostPlayedGamesContainer = document.querySelector(
  ".mostplayed-games__wrapper"
);
const topCategoriesContainer = document.querySelector(
  ".Top-Categories__wrapper"
);

//  getting trending Games feature

const getTrendingGames = async () => {
  try {
    const trendingGames = [
      {
        id: "7",
        title: "Warframe",
        price: 28,
        discount: 22,
        img: "assets/images/trending-01.jpg",
        kind: "Action",
      },
      {
        id: "8",
        title: "Genshin Impact",
        price: 44,
        discount: 0,
        img: "assets/images/trending-02.jpg",
        kind: "Action",
      },
      {
        id: "9",
        title: "League of legends",
        price: 64,
        discount: 44,
        img: "assets/images/trending-03.jpg",
        kind: "Action",
      },
      {
        id: "10",
        title: "Dragon",
        price: 28,
        discount: 22,
        img: "assets/images/trending-04.jpg",
        kind: "Action",
      },
    ];
    let data = trendingGames.forEach((game) => {
      trendingGamesContainer.insertAdjacentHTML(
        "beforeend",
        `
                <div class="trending-game__wrapper">
                      <div class="trending-game-img__wrapper">
                          <a href="product-details.html?id=${
                            game.id
                          }"><img src="${game.img}"></a>
                          <span class="trending-game__discount">
                             ${
                               game.discount > 0
                                 ? `<del>$${game.discount}</del> <P>$${game.price}</P>`
                                 : `<p class="no-discount">$${game.price}</p>`
                             }
                          </span>
                      </div>
                      <div class="trending-game-title__wrapper">
                          <p class="trending-game__kind">Action</p>
                          <div class="trending-game__title">
                              <p>${game.title}</p>
                              <div>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                                      <path fill-rule="evenodd" d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 0 0 4.25 22.5h15.5a1.875 1.875 0 0 0 1.865-2.071l-1.263-12a1.875 1.875 0 0 0-1.865-1.679H16.5V6a4.5 4.5 0 1 0-9 0ZM12 3a3 3 0 0 0-3 3v.75h6V6a3 3 0 0 0-3-3Zm-3 8.25a3 3 0 1 0 6 0v-.75a.75.75 0 0 1 1.5 0v.75a4.5 4.5 0 1 1-9 0v-.75a.75.75 0 0 1 1.5 0v.75Z" clip-rule="evenodd" />
                                    </svg>  
                              </div>                                
                          </div>
                      </div>
                  </div>
            `
      );
    });
  } catch (error) {
    console.log("لطفا سرور را ران کنید");
  }
};

//  init slider from json server (most played games section)

const gettingMostPlayedGames = async () => {
  const data = [
    {
      id: "1",
      title: "Warframe",
      img: "assets/images/top-game-01.jpg",
      kind: "Adventure",
    },
    {
      id: "2",
      title: "PUBG",
      img: "assets/images/top-game-02.jpg",
      kind: "Adventure",
    },
    {
      id: "3",
      title: "Apex Legends",
      img: "assets/images/top-game-03.jpg",
      kind: "Adventure",
    },
    {
      id: "4",
      title: "Sims 4",
      img: "assets/images/top-game-04.jpg",
      kind: "Adventure",
    },
    {
      id: "5",
      title: "Lostark",
      img: "assets/images/top-game-05.jpg",
      kind: "Adventure",
    },
    {
      id: "6",
      title: "Destiny 2",
      img: "assets/images/top-game-06.jpg",
      kind: "Adventure",
    },
  ];

  data.forEach((game) => {
    mostPlayedGamesContainer.insertAdjacentHTML(
      "beforeend",
      `
          <div class="swiper-slide mostplayed__game">
                        <div class="mostplayed-game-img__wrapper">
                            <a href="product-details.html?id=${game.id}"><img src="${game.img}" loading="lazy" class="mostplayed-game__img"></a>
                        </div>
                        <p class="mostplayed-game__kind">${game.kind}</p>
                        <h3 class="mostplayed-game__title">${game.title}</h3>
                        <a href="#" class="mostplayed-game-link">EXPLORE</a>
                      </div>
          `
    );
  });
  initSwiper();
};

//  getting top categories games feature

const getTopCategories = async () => {
  const topCategories =  [
      {"id": "11","img":"assets/images/categories-01.jpg"},
      {"id": "12","img":"assets/images/categories-02.jpg"},
      {"id": "13","img":"assets/images/categories-03.jpg"},
      {"id": "14","img":"assets/images/categories-04.jpg"},
      {"id": "15","img":"assets/images/categories-05.jpg"}
    ]
  const data = topCategories.forEach((category) => {
    topCategoriesContainer.insertAdjacentHTML(
      "beforeend",
      `
            <div class="Top-Category">
                        <p class="Top-Category__kind">Action</p>
                        <a href="product-details.html?id=${category.id}">
                        <img src="${category.img}" class="Top-Category__img">
                        </a>
                    </div>
            `
    );
  });
};

window.addEventListener("load", () => {
  getTrendingGames();
  gettingMostPlayedGames();
  getTopCategories();
});
