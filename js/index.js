import { baseUrl } from "./settings/api.js";
import { renderFeatProducts } from "./components/renderFeatProducts.js";
import { log } from "./components/functions.js";
import { renderHeroBanner } from "./components/renderHeroBanner.js";
import { addToCart } from "./components/addToCart.js";

const fproductcontainer = document.querySelector(".fproduct-container");

async function getFeatProducts() {
  try {
    const url = baseUrl + "products";
    const herourl = baseUrl + "home";

    const urlresponse = await fetch(url);
    const herourlresponse = await fetch(herourl);

    const urljson = await urlresponse.json();
    const herourljson = await herourlresponse.json();

    const product = urljson;
    const heroBanner = herourljson;

    renderHeroBanner(heroBanner);
    renderFeatProducts(product);
    addToCart();

  } catch (error) {
    log("error", `API Unreachable - ` + error, fproductcontainer);
  }
}

getFeatProducts();

