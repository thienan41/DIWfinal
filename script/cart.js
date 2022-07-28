var count = 0;
var total = 0;

var shoppingCart = document.querySelector("#shoppingCart");
const checkout = document.querySelector(".section-checkout");
const closeBtn = document.getElementById("btn-close");
shoppingCart.style = "pointer";
shoppingCart.onclick = (e) => {
  checkout.classList.remove("hide");
  checkout.classList.add("active");
};

closeBtn.onclick = (e) => {
  checkout.classList.remove("active");
  checkout.classList.add("hide");
};
const addtocartBtn = document.querySelectorAll(".itemBox button");

addtocartBtn.forEach((e) => {
  e.addEventListener("click", function (event) {
    const price = event.target.parentElement
      .querySelector("h5")
      .innerText.slice(1);
    const name =
      event.target.parentElement.parentElement.querySelector("h6").innerText;
    const img =
      event.target.parentElement.parentElement.parentElement.querySelector(
        "img"
      ).src;
    handleAddToCart(price, name, img);
    cartEmpty(count);
    document.querySelector(".section-checkout").classList.remove("hide");

    document.querySelector(".section-checkout").classList.add("active");
  });
});

function cartEmpty(count) {
  if (count == 0) {
    document.querySelector(".empty-cart.hide").classList?.remove("hide");
    document.querySelector(".cart-total").classList?.add("hide");
  } else {
    document.querySelector(".empty-cart")
      ? document.querySelector(".empty-cart").classList.add("hide")
      : "";
    document.querySelector(".cart-total.hide")
      ? document.querySelector(".cart-total.hide").classList.remove("hide")
      : "";
  }
}

function handleAddToCart(price, name, img) {
  const listImage = document.querySelectorAll(".checkout-item img");

  for (var i = 0; i < listImage.length; i++) {
    if (listImage[i].src.toString() === img.toString()) {
      alert("Đồ đã được chọn");

      return;
    }
  }

  const checkout = document.createElement("div");
  const checkoutContent = `
  <div class="checkout-item">
    <img src=${img} alt="" />
  </div>
  <div class="checkout-price">$${price}</div>
  <div class="checkout-quantity">
    <input
      type="number"
      name=""
      id="item-quantity"
      style="width: 30px; height: 40px"
      min="1"
      value ="1"
    />
    <button>Remove</button>
  </div>
 `;
  checkout.innerHTML = checkoutContent;
  checkout.classList.add("checkout");

  count++;
  const itemParent = document
    .querySelector(".checkout-container")
    .append(checkout);
  totalCal(1, price);

  const btnRemove = document.querySelectorAll(".checkout-quantity button");
  btnRemove.forEach((item) => {
    item.onclick = (event) => {
      const price = event.target.parentElement.parentElement
        .querySelector(".checkout-price")
        .innerText.slice(1);
      const quantity =
        event.target.parentElement.parentElement.querySelector(
          "#item-quantity"
        ).value;
      totalCal(-parseInt(quantity), parseInt(price));
      event.target.parentElement.parentElement.remove();
      count--;
      cartEmpty(count);
    };
  });

  document.querySelectorAll("#item-quantity").forEach((item) => {
    let quantity = item;
    let oldValue = parseInt(quantity.value);
    quantity.onchange = function (e) {
      const price = e.target.parentElement.parentElement
        .querySelector(".checkout-price")
        .innerText.slice(1);
      if (e.target.value > oldValue) {
        totalCal(1, parseInt(price));
      } else {
        totalCal(-1, parseInt(price));
      }
      oldValue = parseInt(e.target.value);
    };
  });
}

function totalCal(quantity, price) {
  total = total + quantity * price;
  //   console.log(total);
  document.querySelector("#total-cost").innerText = "$" + total;
}

const btnCheckout = document.querySelector("#btn-checkout");

btnCheckout.onclick = () => {
  const purchaseBtn = document.querySelectorAll(".checkout");
  //   console.log(purchaseBtn);
  purchaseBtn.forEach((item) => {
    item.remove();
  });
  count = 0;
  cartEmpty(count);
  total = 0;
  alert("Mua thành công");
};
