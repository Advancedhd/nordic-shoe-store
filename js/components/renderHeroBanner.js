import { baseUrl } from "../settings/api.js";

export function renderHeroBanner(banner) {
  const heroContainer = document.querySelector(".hero-container");
  heroContainer.innerHTML = "";

  let heroBannerUrl = baseUrl + banner.hero_banner.url.substring(1);

  heroContainer.innerHTML += `
        <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="${heroBannerUrl}" class="d-block w-100" alt="${
                baseUrl + banner.hero_banner_alt_text
                }">
            </div>
          </div>
        </div>`;
}
