import { baseUrl } from "../settings/api.js";
import { renderDetails } from "./renderDetails.js";
import { log } from "./functions.js";

(async function getDetails() {
    const productcontainer = document.getElementsByClassName("product-container");
    
    try {
        let url = baseUrl + "products/" + id;
        const response = await fetch(url);
        const json = await response.json();
        const product = json;

        console.log(product)

        renderDetails(product);
    } catch (error) {
        console.log(error);
        log("error", `API Unreachable - ` + error, productcontainer);
    }
})()
