import { baseUrl } from "../settings/api.js";

export function renderFeatProducts(featuredProduct) {
  const fproductContainer = document.querySelector(".fproduct-container");
  fproductContainer.innerHTML = "";

  for (let i = 0; i < featuredProduct.length; i++) {

    //Not all all proficient at Regex (Source: https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url)
    let regex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/
    

    let image = baseUrl + featuredProduct[i].image?.url.slice(1)
    if(!featuredProduct[i].image?.url) image = featuredProduct[i].image_url
  
    if (!featuredProduct[i].image_url && !featuredProduct[i].image?.url) image = "https://playingwith.bitsnthings.dev/error.png"

    if(!image.match(regex)) image = "https://playingwith.bitsnthings.dev/error.png"

    if (featuredProduct[i].featured === true) {
      fproductContainer.innerHTML += `
      <div class="card" style="width: 16rem;">
        <img src="${image}" class="card-img-top" alt="${featuredProduct[i].title}">
        <a href="productdetails.html?id=${featuredProduct[i].id}" class="card-body">
          <h5 class="card-title">${featuredProduct[i].title}</h5>
          <p class="card-text">${featuredProduct[i].description}</p>
            <p class="card-price">${featuredProduct[i].price}kr</p>
        </a>
        <button data-img="${image}" data-price="${featuredProduct[i].price}" data-description="${featuredProduct[i].description}" data-title="${featuredProduct[i].title}" data-id="${featuredProduct[i].id}" id="product${i}"class="addToCart btn btn-primary">Add to cart</button>
      </div>`;
    }
  }
}
