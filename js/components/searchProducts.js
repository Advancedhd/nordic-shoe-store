import { renderProducts } from "./renderProducts.js";



export function searchProducts(product) {
  const errordiv = document.querySelector(".error");
  const search = document.querySelector(".search");

  search.onkeyup = function (event) {
    const searchValue = event.target.value.trim().toLowerCase();

    const filteredProducts = product.filter(function (product) {
      if (product.title.toLowerCase().startsWith(searchValue)) {
        errordiv.innerHTML = ``;
        return true;
      } else {
        return false;
      }
    });

    if (filteredProducts.length === 0) {
      errordiv.innerHTML = `<h1>No Title by the name: ${searchValue}</h1>`;
    }
    renderProducts(filteredProducts);
  };
}
