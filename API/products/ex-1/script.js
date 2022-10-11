// API:
// 	- domain: https://62e0e2ef98dd9c9df61884bd.mockapi.io
// 	- GET products: /products
// 	- GET product: /products/:id
// 	- DELETE product: /products/:id

// Task 1
// 	- create dropdown with products, on select, show product info
// 		- on initial page load, populate dropdown with products
// 		- on dropdown select, fetch data for selected product and display it
// 		- product information should contain "Delete" button
// 			- "Delete" button deletes product from BE and from option list
// 			- after deleting, success message is shown

const api = "https://62e0e2ef98dd9c9df61884bd.mockapi.io/products";
const dropdown = document.getElementById("dropdown");
const placeholder = document.querySelector(".placeholder");

const getProducts = async () => {
  try {
    const response = await fetch(api);
    const data = await response.json();
    data.forEach((product) => {
      createDrop(product);
    });
  } catch (error) {
    console.log(error);
  }
};

const createDrop = (product) => {
  const option = `
        <option value="${product.id}">${product.name}</option>
    `;
  dropdown.insertAdjacentHTML("beforeend", option);
};

const getSingleProduct = async (e) => {
  const id = e.taget.value;
  try {
    const responseSingle = await fetch(`${api}/${id}`);
    const dataSingle = await responseSingle.json();
    console.log(dataSingle);
    showProduct(dataSingle);
  } catch (error) {
    console.log(error);
  }
};

const showProduct = (dataSingle) => {
  const info = `
        <h1>${dataSingle.name}</h1>
        <p>${dataSingle.price}</p>
        <button data-delete=${dataSingle.id}>Delete Product</button>
    `;
  placeholder.insertAdjacentHTML("beforeend", info);
  const deleteBtn = document.querySelectorAll("[data-delete]");
  deleteBtn.addEventListener("click", deleteProduct);
};

const deleteProduct = async (event) => {
  try {
    const id = event.target.dataset.delete; /// drugi nacin --- const id = event.target.getAttribute('data-delete');
    console.log(id);
    const response = await fetch(`${api}/${id}`, { method: "DELETE" });
    if (response.status === 200) {
      const messageTemplate = `<h2>Product was deleted successfully!</h2>`;
      message.insertAdjacentHTML("beforeend", messageTemplate);
      reloadPage();
    } else {
      console.log("Product is not deleted.");
    }
  } catch (error) {
    console.error(error);
  }
};

// events

dropdown.addEventListener("change", showProduct);
