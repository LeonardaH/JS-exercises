// Task 3
// - filtering
// 	- fetch all products from BE
// 	- create input field for searching the products
// 	- when user enters something in input field, filter is triggered
// 	- user can filter by any attribute (id, name, price)

const input = document.querySelector("input");
const placeholder = document.querySelector(".placeholder");
const api = "https://62e38c34b54fc209b88b1c61.mockapi.io/products";
let products = [];

const getProducts = async () => {
  const response = await fetch(api);
  products = await response.json();
  console.log(products);
  showProductInfo(products);
};

const showProductInfo = (products) => {
  products.forEach((product) => {
    const template = `
        <div class="single-product">
           <h2>${product.name}</h2>
           <hr />
           <p>${product.price}</p>
         </div>
       `;
    placeholder.insertAdjacentHTML("beforeend", template);
  });
};

const filterProducts = (event) => {
  let keyword = event.target.value;
  const filteredProducts = products.filter((product) => {
    let productInfoData = `${product.id},${product.name.toLowerCase()},${
      product.price
    }`;
    return productInfoData.includes(keyword.toLowerCase());
  });
  showProductInfo(filteredProducts);
};

input.addEventListener("input", filterProducts);
getProducts();
