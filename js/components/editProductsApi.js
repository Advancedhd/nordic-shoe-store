import { baseUrl } from "../settings/api.js"
import { sendRequest, getToken } from "./functions.js";

const token = getToken();


export async function getEditData(event) {
    event.preventDefault();
  
    const editErrorDiv = document.querySelector(".update-errors")
  
    const newProductId = document.getElementById("updateIdInputValue").value;
    const newProductTitle = document.getElementById("updateTitleInputValue").value;
    const newProductPrice = document.getElementById("updatePriceInputValue").value;
  
    const newProductFeatured = document.getElementById("updatefProductCheckValue").checked;
  
    const newProductDesc = document.getElementById("updateDescInputValue").value;
    const newProductImgURL = document.getElementById("updateImgUrlInputValue").value;
  
    if(!newProductId) return log("error", `Please enter an ID!`, editErrorDiv);
    
    let url = baseUrl + "products/" + newProductId;
  
    const urlresponse = await fetch(url)
    if (urlresponse.status === 404) return log("error", JSON.stringify("Request encountered an error: " + urlresponse.statusText), editErrorDiv);
    const urljson = await urlresponse.json();
    const oldData = urljson;
    
    const updatedTitle = newProductTitle ? newProductTitle : oldData.title 
    const updatedPrice = newProductPrice ? newProductPrice : oldData.price 
    const updatedDesc = newProductDesc ? newProductDesc : oldData.description
    const updatedImgURL = newProductImgURL ? newProductImgURL : oldData.image_url
  
    // Same comparison didnt work for featured check, dunno why?!?!?!
    let updatedFeatured = newProductFeatured
    if (updatedFeatured != oldData.featured) {
      updatedFeatured = updatedFeatured
    } else {
      updatedFeatured = oldData.featured
    }
  
    if (isNaN(updatedPrice)) return log("error", `Price is not a number!`, editErrorDiv);
  
    let updatedData = JSON.stringify({
      title:        updatedTitle,
      price:        updatedPrice,
      featured:     updatedFeatured,
      description:  updatedDesc,
      image_url:    updatedImgURL
    });
  
  
    sendRequest(updatedData, token, "PUT", url, "Updated", editErrorDiv);
  }