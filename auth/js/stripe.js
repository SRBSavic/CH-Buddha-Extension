var stripe = Stripe(
  "pk_live_51LkujnGAVxz2yKaHDrM4CF1O944v39ZbHAUioTcKVVFFLrYhbaJyzbJbUPZcHcZygg8UEC3ACHwCIKNK0v0PIfdp00YAdeUPmO"
);
window.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");

  const checkoutBtns = document.getElementsByClassName("checkoutBtn");
  const headerEmail = document.getElementById("headerEmail");

  chrome.runtime.sendMessage({ question: "userEmail" }, function (res) {
    console.log(res);
    headerEmail.innerText = res;
  });

  for (let button of checkoutBtns) {
    console.log(button);
    button.addEventListener("click", function (element) {
      spinner = `<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
  <span class="sr-only">Loading...</span>`;
      button.innerHTML = "";
      button.insertAdjacentHTML("afterbegin", spinner);

      chrome.runtime.sendMessage(
        { action: "buyBtnClicked", buttonId: button.id },
        (response) => {
          stripe.redirectToCheckout({ sessionId: response.sessionId });
        }
      );
    });
  }
});
