import { PRODUCTS } from "./server.js";
const cards = document.querySelector(".cards");
let fragment = document.createDocumentFragment();
PRODUCTS.forEach((el, index) => {
  let card = document.createElement("div");
  card.innerHTML = `
                <div class="image">
                  <div class="sale">
                    <div class="tick">
                      <img src="./images/tick.svg" alt="tick" />
                      <p>Нет в наличии</p>
                    </div>
                    <button>SALE</button>
                    <div class="gift">
                      <img src="./images/gift.svg" alt="gift" />
                      <p>Подарок</p>
                    </div>
                  </div>
                  <img src="${el.image}" alt="image" />
                </div>
                <div style="border-top:1px solid #eaeaea" class="rating">
                  <img src="./images/rating.png" alt="rating" />
                  <p>(12) отзывов</p>
                </div>
                <h4 title="${el.description}"  class="heading">${el.description}</h4>
                <div class="cost">
                  <h4>${el.cost}$</h4>
                  <span>${el.discountPercentage}$</span>
                </div> 
    `;
  card.classList.add("card");
  fragment.appendChild(card);
});
cards.appendChild(fragment);
