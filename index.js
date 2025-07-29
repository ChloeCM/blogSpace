const newPostEl = document.getElementById("new-post");
const postTitleEl = document.getElementById("post-title");
const postBodyEl = document.getElementById("post-body");
const submitBtnEl = document.getElementsByName("submit-btn");
let postArray = [];

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    postArray = data.slice(0, 9);
    console.log(postArray);
    renderPosts();
  });

function renderPosts() {
  let htmlDisplay = "";
  for (let data of postArray) {
    htmlDisplay += `
          <h3>${data.title}</h3>
          <p>${data.body}</p>
          <br />
          <hr /> 
        `;
  }
  document.getElementById("blog-list").innerHTML = htmlDisplay;
}

newPostEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const newTitle = postTitleEl.value;
  const newBody = postBodyEl.value;
  const data = {
    title: newTitle,
    body: newBody,
  };

  if (!newTitle || !newBody) {
    alert("Please enter both a title and the content for your new post");
    return;
  }

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json",
    },
  };

  fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
    .then((res) => res.json())
    .then((post) => {
      postArray.unshift(post);
      renderPosts();
      postTitleEl.value = "";
      postBodyEl.value = "";
    });
});
