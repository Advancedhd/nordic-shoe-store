import { baseUrl } from "../settings/api.js"
import { sendRequest, getToken } from "./functions.js";

const token = getToken();

export function getAddData() {
    const addTitle = document.getElementById("addTitleInputValue").value;
    const addPrice = document.getElementById("addPriceInputValue").value;
    const addFeatured = document.getElementById("addfProductCheckValue").checked;
    const addDesc = document.getElementById("addDescInputValue").value;
    const addImgURL = document.getElementById("addImgUrlInputValue").value;
  
    let url = baseUrl + "products";
  
    let data = JSON.stringify({
      title: addTitle,
      price: addPrice,
      featured: addFeatured,
      description: addDesc,
      image_url: addImgURL
    });
  
    const addErrorDiv = document.querySelector(".add-errors")
  
    console.log(data)
  
    sendRequest(data, token, "POST", url, "Added", addErrorDiv);
  }