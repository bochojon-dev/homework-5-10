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
    <img src="${data.image}" width="300px" alt="image">
        <h2>${data.title}</h2>
        <h1>${data.price} </h1>
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
