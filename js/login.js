import { log } from "./components/functions.js";
import { baseUrl } from "./settings/api.js";
import { handleLoggedInUser } from "../js/components/handleLoggedInUser.js";

const form = document.querySelector("form");
const username = document.querySelector("#exampleInputEmail1");
const password = document.querySelector("#exampleInputPassword1");
const passwError = document.querySelector("#p-error");
const emailError = document.querySelector("#e-error");


form.addEventListener("submit", submitForm);

const token = localStorage.getItem("token");
if (token) {
  const div = document.querySelector(".border-container");
  div.parentNode.removeChild(div);
  handleLoggedInUser(token);
}

function submitForm(event) {
  event.preventDefault();

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  login(usernameValue, passwordValue);
}

const login = async (u, p) => {
  const url = baseUrl + "auth/local";

  const data = JSON.stringify({ identifier: u, password: p });

  const fetchOptions = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(url, fetchOptions)
    .then((res) => {
      if (res) {
        return res.json();
      }
    })
    .then((res) => {
      if (res.statusCode === 400) {
        return getErrorDetails(res);
      }
      const token = res.jwt;
      localStorage.setItem("token", token);
      log("success", "Logging in...", passwError);
      setTimeout(() => {
        location.reload();
      }, 1500);
      return;
    })
    .catch((e) => {
      return log("error", `API Unreachable - ${e}`, passwError);
    });
};

function getErrorDetails(r) {
  if (r.message[0].messages[0].message.includes("password")) {
    return log("error", r.message[0].messages[0].message, passwError);
  } else {
    return log("error", r.message[0].messages[0].message, emailError);
  }
}
