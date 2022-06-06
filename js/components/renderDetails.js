import { baseUrl } from "../settings/api.js";
import { addToCart } from "./addToCart.js";

export function renderDetails(product) {
  const productContainer = document.querySelector(".product-container");
  productContainer.innerHTML = "";


    //Not all all proficient at Regex (Source: https://stackoverflow.com/questions/3809401/what-is-a-good-regular-expression-to-match-a-url)
    let regex = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/

    let image = baseUrl + product.image?.url.slice(1)
    if(!product.image?.url) image = product.image_url
  
    if (!product.image_url && !product.image?.url) image = "https://playingwith.bitsnthings.dev/error.png"

    if(!image.match(regex)) image = "https://playingwith.bitsnthings.dev/error.png"

    productContainer.innerHTML += `
    <div class="container">
        <div class="row">
            <div class="col-md-5">
                <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="${image}" class="d-block w-100" alt="${product.title}">
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-7">
                <h2 class="detailsTitle"> ${product.title}</h2>
                <p class="detailsPrice"><span class="detailsPriceTitle">Price:</span> <br> ${product.price}kr</p>
            <div class="detailsDesc">
                <p>${product.description}</p>
            </div>
                <button data-img="${image}" data-price="${product.price}" data-description="${product.description}" data-title="${product.title}" data-id="${product.id}" class="addToCart btn btn-primary">Add to cart</button>
            </div>
        </div>
    </div>`;

          addToCart();
    }