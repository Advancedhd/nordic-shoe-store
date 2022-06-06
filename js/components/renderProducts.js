import { baseUrl } from "../settings/api.js";

export function renderProducts(product) {
  const productContainer = document.querySelector(".product-container");
  productContainer.innerHTML = "";
  for (let i = 0; i < product.length; i++) {

    //Not all all proficient at Regex (Source: https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url)
    let regex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    

    let image = baseUrl + product[i].image?.url.slice(1)
    if(!product[i].image?.url) image = product[i].image_url
  
    if (!product[i].image_url && !product[i].image?.url) image = "https://playingwith.bitsnthings.dev/error.png"

    if(!image.match(regex)) image = "https://playingwith.bitsnthings.dev/error.png"

      productContainer.innerHTML += `
      <div class="card" style="width: 16rem;">
        <img src="${image}" class="card-img-top" alt="${product[i].title}">
        <a href="productdetails.html?id=${product[i].id}" class="card-body">
          <h5 class="card-title">${product[i].title}</h5>
          <p class="card-text">${product[i].description}</p>
          <p class="card-price">${product[i].price}kr</p>
        </a>
        <button data-img="${image}" data-price="${product[i].price}" data-description="${product[i].description}" data-title="${product[i].title}" data-id="${product[i].id}" id="product${i}"class="addToCart btn btn-primary">Add to cart</button>
      </div>`;
        
    }
}