import { baseUrl } from "../settings/api.js"; 

export function log(type, content, element) {
  switch (type) {
    case "error":
      element.innerHTML = `<div class="${element}">${content}</div>`;
      element.style.color = "red";
      element.style.fontWeight = "bold";
      break;
    case "success":
      element.innerHTML = `<div class="${element}">${content}</div>`;
      element.style.color = "green";
      element.style.fontWeight = "bold";
      break;
    case "log":
      console.log(`${content}`);
      break;
  }
}

export function getToken() {
  return localStorage.getItem("token");
}


export function getCurrentProducts() {
  const products = localStorage.getItem("products");
  if (products === null) {
    return [];
  } else {
    return JSON.parse(products);
  }
}

export async function getProducts() {
  let getUrl = baseUrl + "products" 
  const getRespose = await fetch(getUrl);
  const getJson = await getRespose.json();
  const data = getJson;
  return data
}


export async function sendRequest(data, token, method, url, tag, element) {
  const fetchOptions = {
    method: method,
    body: data,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  fetch(url, fetchOptions)
    .then((res) => {
      if (res) {
        return res.json();
      }
    })
    .then((res) => {
      if (res.statusCode === 400 || res.statusCode === 404) {
        return log("error", JSON.stringify(res), element);
      }
      if (res.statusCode === 200) {
        log("success", `Success! ${tag} ${title}`, element)}
        setTimeout(() => {
          location.reload()
        }, 2000);
      return;
    })
    .catch((e) => {
      return log("error", `API Unreachable ${e}`, element);
    });
}