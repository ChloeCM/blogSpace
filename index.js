const newPostEl = document.getElementById("new-post");
const postTitleEl = document.getElementById("post-title");
const postBodyEl = document.getElementById("post-body");
const submitBtnEl = document.getElementsByName("submit-btn");
let postArray = [];

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    postArray = data.slice(0, 5);
    console.log(postArray);
    renderPosts();
  });

function renderPosts() {
  let htmlDisplay = "";
  for (let data of postArray) {
    htmlDisplay += `
          <h3>${data.title}</h3>
          <p>${data.body}</p> 
        `;
  }
  document.getElementById("blog-list").innerHTML = htmlDisplay;
}
