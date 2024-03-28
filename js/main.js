// import { PRODUCTS } from "./server.js";
// const cards = document.querySelector(".cards");
// let fragment = document.createDocumentFragment();
// PRODUCTS.forEach((el, index) => {
//   let card = document.createElement("div");
//   card.innerHTML = `
//                 <div class="image">
//                   <div class="sale">
//                     <div class="tick">
//                       <img src="./images/tick.svg" alt="tick" />
//                       <p>Нет в наличии</p>
//                     </div>
//                     <button>SALE</button>
//                     <div class="gift">
//                       <img src="./images/gift.svg" alt="gift" />
//                       <p>Подарок</p>
//                     </div>
//                   </div>
//                   <img src="${el.image}" alt="image" />
//                 </div>
//                 <div style="border-top:1px solid #eaeaea" class="rating">
//                   <img src="./images/rating.png" alt="rating" />
//                   <p>(12) отзывов</p>
//                 </div>
//                 <h4 title="${el.description}"  class="heading">${el.description}</h4>
//                 <div class="cost">
//                   <h4>${el.cost}$</h4>
//                   <span>${el.discountPercentage}$</span>
//                 </div>
//     `;
//   card.classList.add("card");
//   fragment.appendChild(card);
// });
// cards.appendChild(fragment);

// LOADING
const loads = document.querySelector(".loads");
const load = document.querySelector(".load");
let count = [];
for (i = 0; i <= 9; i++) {
  count.push(i);
}
let fragment = document.createDocumentFragment();
count.forEach((el, index) => {
  let div = document.createElement("div");
  div.classList.add("loads");
  div.innerHTML = `
  <div style="max-width: 250px" class="load">
              <div
                style="
                  width: 250px;
                  height: 300px;
                  background: #f2f2f2;
                  border-radius: 12px;
                "
              ></div>
              <div style="display: flex; flex-direction: column" class="texts">
                <div
                  style="
                    margin: 12px 0 8px !important;
                    width: 246px;
                    background: #f1f1f1;
                    height: 20px;
                  "
                ></div>
                <div
                  style="width: 125px; background: #f1f1f1; height: 20px"
                ></div>
                <div
                  style="
                    padding-top: 12px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between !important;
                  "
                >
                  <div
                    style="width: 100px; height: 20px; background: #f2f2f2"
                  ></div>
                  <div
                    style="
                      width: 28px;
                      height: 28px;
                      border-radius: 50%;
                      background: #f1f1f1;
                    "
                  ></div>
                </div>
              </div>
            </div>
  `;
  fragment.appendChild(div);
});
loads.appendChild(fragment);

const wrapper = document.querySelector(".wrapper");
const API = "https://fakestoreapi.com/products";
async function fetchData(api) {
  let data = await fetch(api);
  data
    .json()
    .then((res) => {
      createCrad(res);
      createCategory(res);
      // return res;
    })
    .catch((error) => console.log(error))
    .finally(() => {
      loads.style.display = "none";
    });
}
fetchData(API);

function createCrad(data) {
  while (wrapper.firstChild) {
    wrapper.firstChild.remove();
  }
  fragment = document.createDocumentFragment();
  data.forEach((product) => {
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class="card1">
    <div class="icons">
        <div class="new">
          <p>YANGI</p>
        </div>
        <div class="like">
          <img  src="./images/card-heart.svg" alt="heart" />
          <img  src="./images/card-scale.svg" alt="scale" />
        </div>
    </div>
    <div class="image">
      <img name="product-image" data-id=${
        product.id
      } style="width:200px;height:170px;padding:10px" src="${
      product.image
    }" alt="image" />
    </div>
    <h3 title="${product.description}" class="description">${
      product.description
    }</h3>
    <div style="display:flex" class="rate">
      <div style="display: flex; gap: 4px" class="rating">
        <img src="./images/rating.svg" alt="rating" />
        <img src="./images/rating.svg" alt="rating" />
        <img src="./images/rating.svg" alt="rating" />
        <img src="./images/rating.svg" alt="rating" />
        <img src="./images/rating.svg" alt="rating" />
      </div>
      <span>
        <img src="./images/comment.svg" alt="comment" /> 0 ta sharh
      </span>
      </div>
      <p class="price">${product.price} so'm</p>
      <span class="credit">${Math.ceil(
        product.price / 8
      )}.99 so'm x 12 oy</span>
      <div class="buttons">
        <button class="buy_now">Hoziroq harid qilish</button>
        <button class="card-cart">
          <img src="./images/card-cart.svg" alt="cart" />
        </button>
      </div>
  </div>`;
    fragment.appendChild(card);
  });
  wrapper.appendChild(fragment);
}
const singleRoute = (id) => {
  window.open(`/pages/products.html?id=${id}`, "_self");
};

wrapper.addEventListener("click", (e) => {
  if (e.target.name == "product-image") {
    let id = e.target.dataset.id;
    singleRoute(id);
  }
});

// CATEGORY
const category = document.querySelector(".category");
function createCategory(data) {
  while (category.firstChild) {
    category.firstChild.remove();
  }
  let fragment = document.createDocumentFragment();
  let categories = Array.from(new Set(data.map((el) => el.category)));
  categories.forEach((el) => {
    let option = document.createElement("option");
    option.innerHTML = el;
    option.value = el;
    fragment.appendChild(option);
  });
  category.appendChild(fragment);
}
category.addEventListener("change", async (e) => {
  loads.style.display = "flex";
  let value = e.target.value;
  let categoryUrl = value === "All" ? "" : `/category/${value}`;
  let data = await fetch(`${API}${categoryUrl}`);
  data
    .json()
    .then((res) => {
      createCrad(res);
      // fetchData(res);
    })
    .catch((error) => console.log(error, "ok"))
    .finally(() => {
      loads.style.display = "none";
    });
});
