// Task 2
// 	- get random product
// 		- create button "Get random product"
// 		- on button click, random product information is fetched from BE
// 		- information about product is displayed alognside with "Delete" button
// 		- after deleting, success message is shown

const randomBtn = document.querySelector("#btn");
const placeholder = document.querySelector(".placeholder");
let message = document.querySelector(".message");
const products = [];
const api = "https://62e38c34b54fc209b88b1c61.mockapi.io/products";

const getProducts = async () => {
  const response = await fetch(api);
  const data = await response.json();
  data.forEach((p) => {
    products.push(p);
  });
  console.log(products);
};

const randomProductId = () => {
  const random = Math.floor(Math.random() * products.length);
  return products[random].id;
};

const getProductInfo = async () => {
  const id = randomProductId();
  const response = await fetch(`${api}/${id}`);
  const data = await response.json();
  console.log(data);
  displayInfo(data);
  const deleteBtn = document.querySelector("[data-delete]");
  deleteBtn.addEventListener("click", deleteProduct);
};

const displayInfo = (data) => {
  const template = `
        <h1>${data.name}</h1>
        <p>Price: ${data.price}</p>
        <button type="button" data-delete=${data.id}>Delete Product</button>
    `;
  placeholder.insertAdjacentHTML("beforeend", template);
};

const deleteProduct = async (event) => {
  try {
    const id = event.target.dataset.delete;
    const response = await fetch(`${api}/${id}`, { method: "DELETE" });
    if (response.status === 200) {
      message.textContent = "Product was deleted succesfuly!";
      removeProduct(id);
      placeholder.innerHTML = "";
    }
  } catch (error) {
    console.error(error);
  }
};

randomBtn.addEventListener("click", getProductInfo);

const removeProduct = (id) => {
  let productIndex = products.findIndex((product) => product.id === id);
  products.splice(productIndex, 1);
};

getProducts();
