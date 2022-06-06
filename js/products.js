import { baseUrl } from "./settings/api.js";
import { renderProducts } from "./components/renderProducts.js";
import { searchProducts } from "./components/searchProducts.js";
import { log } from "./components/functions.js";
import { addToCart } from "./components/addToCart.js";

const productcontainer = document.querySelector(".product-container");

(async function getProducts() {
  try {
    const url = baseUrl + "products";
    const response = await fetch(url);
    const json = await response.json();
    const product = json;

    renderProducts(product);
    searchProducts(product);
    addToCart(product);
    
  } catch (error) {
    console.log(error);
    log("error", `API Unreachable - ` + error, productcontainer);
  }

})()