import { baseUrl } from "../settings/api.js"
import { sendRequest, getToken } from "./functions.js";

const token = getToken();


export function getDeleteData() {
    const deleteId = document.getElementById("deleteIdInputValue").value;
  
    const deleteErrorDiv = document.querySelector(".delete-errors")
    if (!deleteId) return log("error", `Please enter an ID!`, deleteErrorDiv);
  
    let url = baseUrl + "products/" + deleteId;
    let data = ""
    sendRequest(data, token, "DELETE", url, "Deleted", deleteErrorDiv);
  }