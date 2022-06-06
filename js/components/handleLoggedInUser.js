import { getAdminForm } from "./form.js";
import { getProducts } from "./functions.js";
import { getAddData } from "./addProductsApi.js"
import { getEditData } from "./editProductsApi.js"
import { getDeleteData } from "./deleteProductsapi.js"


export async function handleLoggedInUser() {
  const root = document.querySelector("main");
  const navbar = document.querySelector(".navbar-nav");
  root.innerHTML = getAdminForm();

  const listContainer = document.querySelector("#curProductList");
  const listOfCurProcucts = await getProducts()

  for (let i = 0; i < listOfCurProcucts.length; i++) {
    listContainer.innerHTML += `<div class="current-products"><strong>${listOfCurProcucts[i].title}</strong> has ID <strong>${listOfCurProcucts[i].id}<strong> <br></div>` 
  }

  navbar.innerHTML += `
  <li class="nav-item">
    <a class="nav-link" href="admin.html" onclick="return logout()">Logout</a>
  </li>`

  const addButton = document.getElementById("addButton");
  const updateButton = document.getElementById("updateButton");
  const deleteButton = document.getElementById("deleteButton");

  addButton.addEventListener("click", getAddData);
  updateButton.addEventListener("click", getEditData);
  deleteButton.addEventListener("click", getDeleteData);
}


