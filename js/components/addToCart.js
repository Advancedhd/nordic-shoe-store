import { getCurrentProducts } from "./functions.js";

export function addToCart() {
  const addToCartButtons = document.querySelectorAll(".addToCart");

  addToCartButtons.forEach((button) => {
    button.addEventListener("click", addtoCartClick);
  });

  function addtoCartClick() {
    const id = this.dataset.id;
    const image = this.dataset.image;
    const title = this.dataset.title;
    const description = this.dataset.description;
    const price = this.dataset.price;

    const deletealert = confirm("Are you sure you want to add this to the cart?");
  
      if (!deletealert) {
        return;
      }

    const currentProducts = getCurrentProducts();

    const productExists = currentProducts.find(function (products) {
      return products.id === id;
    });

    if (productExists === undefined) {
        const product = { id: id, image: image, title: title, description: description, price: price };
        currentProducts.push(product);
        addProducts(currentProducts);
    } else {
      const newProducts = currentProducts.filter(
        (Products) => Products.id !== id
      );
      addProducts(newProducts);
    }
  }

  function addProducts(product) {
    localStorage.setItem("products", JSON.stringify(product));
  }
}