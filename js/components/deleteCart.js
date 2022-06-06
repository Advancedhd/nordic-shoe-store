export function deleteCart() {
    const deletefavs = document.querySelector(".clearall-btn");
  
    deletefavs.addEventListener("click", clearCart);
  
    function clearCart() {
      const deletealert = confirm("Are you sure you want to clear your cart?");
  
      if (!deletealert) {
        return;
      }
      localStorage.removeItem("products");
      location.reload()
    }
  }


  