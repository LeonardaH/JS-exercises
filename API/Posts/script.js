// 1. Create a function named getPosts() that is fetching the data from this endpoint: https://jsonplaceholder.typicode.com/ (check the documentation)
// 2. Add all posts to the DOM (in any way that you like) by using template strings.
// 3. Add a button “show comments” to every post and load all comments to the specific post if the
// user is clicking the button.
// 4. Add another button to all posts where the user can delete the post. For this you can also check
// out the following documentation: https://jsonplaceholder.typicode.com/guide/ . After the user clicks the button and the request was successful remove the post from the DOM.

// selecting elements

const placeholder = document.getElementById("placeholder");
const api = "https://jsonplaceholder.typicode.com";

const getPosts = async () => {
  const response = await fetch(`${api}/posts`);
  const data = await response.json();
  console.log(data);
  data.forEach((post) => {
    displayPost(post);
  });
  handleButtons();
};

const handleButtons = () => {
  const commentsButton = document.querySelectorAll("[data-comments]");
  commentsButton.forEach((btn) => {
    btn.addEventListener("click", getComments);
  });
  const deleteButton = document.querySelectorAll("[data-delete]");
  deleteButton.forEach((btn) => {
    btn.addEventListener("click", delelePost);
  });
};

const displayPost = (post) => {
  const template = `
    <article data-posts>
      <h1>${post.title}</h1>
      <p>${post.body}</p>
      <button data-comments=${post.id}>Show Comments</button>
      <div data-container></div>
      <button data-delete=${post.id}>Delete Post</button>
    </article>
  `;
  placeholder.insertAdjacentHTML("beforeend", template);
};

const getComments = async (event) => {
  const id = event.target.getAttribute("data-comments");
  const comResponse = await fetch(`${api}/posts/${id}/comments`);
  const comData = await comResponse.json();
  console.log(comData);
  const post = event.target.closest("[data-posts]");
  const commentsArea = post.querySelector("[data-container]");
  comData.forEach((com) => {
    showComments(com, commentsArea);
  });
};

const delelePost = async (event) => {
  const id = event.target.getAttribute("data-delete");
  try {
    const response = await fetch(`${api}/posts/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      const post = event.target.closest("[data-posts]");
      post.remove();
      console.log(`Post ${id} was succesfully deleted!`);
    }
  } catch (error) {
    console.log("error");
  }
};

const showComments = (com, commentsArea) => {
  const comTemplate = `
    <h1>${com.body}</h1>
    <p>${com.email}</p>
    <p>${com.name}</p>
  `;
  commentsArea.insertAdjacentHTML("beforeend", comTemplate);
};

window.addEventListener("load", getPosts);
