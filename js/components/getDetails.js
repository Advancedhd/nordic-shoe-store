import { baseUrl } from "../settings/api.js";
import { renderDetails } from "./renderDetails.js";
import { log } from "./functions.js";

(async function getDetails() {
    const productcontainer = document.getElementsByClassName("product-container");

    try {
        const params = new URLSearchParams(window.location.search)
        const id = params.get("id")

        let url = baseUrl + "products/" + id;
        const response = await fetch(url);
        const json = await response.json();
        const product = json;

        renderDetails(product);
    } catch (error) {
        console.log(error);
        log("error", `API Unreachable - ` + error, productcontainer);
    }
})()
