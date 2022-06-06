export function checkout() {
    const deletefavs = document.querySelector(".checkout-btn");
    const container = document.querySelector(".cart-container");

    deletefavs.addEventListener("click", checkoutComplete);
  
    function checkoutComplete() {
      const deletealert = confirm("Are you sure you want to buy these items?");
  
      if (!deletealert) {
        return;
      }
      localStorage.removeItem("products");
        setTimeout(() => {
            location.reload()
        }, 6000);

    container.innerHTML = "";
    
    container.innerHTML += `<h2 class="checkoutText">Thank you for your purchase! :)</h2>`;
    }
  }