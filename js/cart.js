import { baseUrl } from "./settings/api.js";
import { log } from "./components/functions.js";
import { deleteCart } from "./components/deleteCart.js";
import { checkout } from "./components/checkout.js"

const container = document.querySelector(".cart-container");
const priceContainer = document.querySelector(".totalPrice");
const ProductFromLocalstorage = localStorage.getItem("products");
const ParsedLocalstorage = JSON.parse(ProductFromLocalstorage);

priceContainer.innerHTML = "";


(async function () {
  try {
    let totalPrice = 0;
    for (let i = 0; i < ParsedLocalstorage.length; i++) {

        const productUrl = baseUrl + "products/" + ParsedLocalstorage[i].id;
        const response = await fetch(productUrl);
        if (response.status === 404) return
        const product = await response.json();
  
        let regex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
        let image = baseUrl + product.image?.url.slice(1)
        if(!product.image?.url) image = product.image_url
        
        if (!product.image_url && !product.image?.url) image = "https://playingwith.bitsnthings.dev/error.png"
        
        if(!image.match(regex)) image = "https://playingwith.bitsnthings.dev/error.png"

        totalPrice = totalPrice + parseFloat(ParsedLocalstorage[i].price)

        container.innerHTML += `
      <div class="card" style="width: 16rem;">
          <img src="${image}" class="card-img-top" alt="${ParsedLocalstorage.title}">
        <a href="productdetails.html?id=${ParsedLocalstorage[i].id}" class="card-body">
          <h5 class="card-title">${ParsedLocalstorage[i].title}</h5>
          <p class="card-text">${ParsedLocalstorage[i].description}</p>
          <p class="card-price">${ParsedLocalstorage[i].price}kr</p>
        </a>
      </div>`;
      }

      priceContainer.innerHTML = "Total price: " + `<span class="priceSum">${totalPrice}</span>`
  } catch (error) {
    log("error", error, container);
  }
})();

deleteCart();
checkout();


if (ParsedLocalstorage < 1 || ParsedLocalstorage === null) {
  container.innerHTML = `<h2 class="no-cart">You have no products in the cart.</h2>`;
}