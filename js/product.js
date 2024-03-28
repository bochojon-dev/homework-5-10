const API = "https://fakestoreapi.com/products";
const notFound = document.querySelector(".not_found");
async function fetchData(api) {
  let query = new URLSearchParams(window.location.search);
  let id = query.get("id");
  let data = await fetch(`${api}/${id}`);
  data
    .json()
    .then((res) => createSingleProduct(res))
    //  createCrad(res))
    .catch((error) => {
      (notFound.style.display = "block"), console.log(error);
    });
  // .finally(() => {
  //   loads.style.display = "none";
  // });
}
fetchData(API);
function checkId() {
  let query = new URLSearchParams(window.location.search);
  let id = query.get("id");
  console.log(id);
}
checkId();

const productWrapper = document.querySelector(".product-wrapper");
function createSingleProduct(data) {
  productWrapper.innerHTML = `
  <div style="padding-top: 100px;display:flex;align-items:center;gap:60px" class="product-wrapper">
  <div style="position:relative" class="product-image">
    <img width="300px" src="${data.image}" alt="img" />
    <span style="position:absolute;top:1git0;left:10;" class="span">
      <p style="padding: 8px 16px; background: #f00;width:60px;" class="new">Yangi</p>
      <span class="icon">
        <img src="../images/card-heart.svg" alt="heart" />
        <img src="../images/card-cart.svg" alt="cart" />
      </span>
    </span>
  </div>
  <div class="buy">
    <h2></h2>
    <div style="display: flex; gap: 4px" class="rating">
      <img src="../images/rating.svg" alt="rating" />
      <img src="../images/rating.svg" alt="rating" />
      <img src="../images/rating.svg" alt="rating" />
      <img src="../images/rating.svg" alt="rating" />
      <img src="../images/rating.svg" alt="rating" />
    </div>
    <span>
      <img src="../images/comment.svg" alt="comment" /> 0 ta sharh
    </span>
    <div class="share">
      <img src="../images/bxs-share-alt.svg" alt="share" />
      <p>Ulashish</p>
    </div>
  </div>
  <h2>${data.price} so'm </h2>
  <h4>${Math.ceil(data.price / 8)}.99 so'm x 12 oy </h4>
  <button>Savatga qo'shish</button>
  <button>Hoziroq harid qiling</button>
</div>
    `;
}

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
