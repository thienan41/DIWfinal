const listCategory = document.querySelectorAll(".list-category");
const itemBox = document.querySelectorAll(".itemBox");

var listItem = [
  {
    name: "Green Jacket",
    price: "$10",
    dataFilter: "Best Seller",
    img: "image/aokhoac1.jpg",
  },
  {
    name: "Long Sleeve Shirt",
    price: "$15",
    dataFilter: "Best Seller",
    img: "image/aotaydai.jpg",
  },
  {
    name: "Bull T-Shirt",
    price: "$10",
    dataFilter: "Best Seller",
    img: "image/t-shirt2.jpg",
  },
  {
    name: "DeepSea T-Shirt",
    price: "$12",
    dataFilter: "Hot",
    img: "image/aothung4.jpg",
  },
  {
    name: "Avatar T-Shirt",
    price: "$20",
    dataFilter: "Hot",
    img: "image/t-shirt1.jpg",
  },
  {
    name: "Short Sleeve Shirt",
    price: "$17",
    dataFilter: "New",
    img: "image/somi1.jpg",
  },
  {
    name: "Short Sleeve Shirt Flower",
    price: "$33",
    dataFilter: "New",
    img: "image/somi2.jpg",
  },
  {
    name: "Green Jacket",
    price: "$350",
    dataFilter: "New",
    img: "image/shoe.jpg",
  },
];

const listProductContainer = document.querySelector(".row");
listItem.map((item, index) => {
  const colContainer = document.createElement("div");
  const colContent = ` <div class="itemBox" data-item=${item.dataFilter} key=${index}>
    <img src=${item.img} alt="" />
    <div class="item-text">
      <h6>${item.name}</h6>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <div class="add">
        <h5>${item.price}</h5>
      </div>
    </div>
    </div>`;
  colContainer.innerHTML = colContent;
  colContainer.classList.add("col-3");
  listProductContainer.append(colContainer);
});

for (let i = 0; i < listCategory.length; i++) {
  listCategory[i].addEventListener("click", function () {
    document.querySelector(".list-category.active").classList.remove("active");
    this.classList.add("active");
    var newList = listItem.filter(
      (item, index) =>
        this.innerText === "All" || item.dataFilter == this.innerText
    );
    renderItem(newList);
  });
}

function renderItem(newList) {
  document.querySelector(".row").remove();
  const rowContainer = document.createElement("div");
  rowContainer.classList.add("row");
  const productContainer = document.querySelector(".product");
  console.log(productContainer);
  productContainer.append(rowContainer);
  console.log(productContainer);
  const listProductContainer = document.querySelector(".row");
  newList.map((item, index) => {
    const colContainer = document.createElement("div");
    const colContent = ` <div class="itemBox" data-item=${item.dataFilter} key=${index}>
    <img src=${item.img} alt="" />
    <div class="item-text">
      <h6>${item.name}</h6>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <i class="fa-solid fa-star"></i>
      <div class="add">
        <h5>${item.price}</h5>
      </div>
    </div>
    </div>`;
    colContainer.innerHTML = colContent;
    colContainer.classList.add("col-3");
    listProductContainer.append(colContainer);
  });
}
