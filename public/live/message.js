document
  .getElementById("comment-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var comment = document.getElementById("comment").value;
    if (name && comment) {
      fetch("/comments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, comment }),
      })
        .then((response) => response.json())
        .then((data) => {
          // addComment(name, comment);
          document.getElementById("name").value = "";
          document.getElementById("comment").value = "";
        });
    }
    getComment();
  });

function addComment(name, comment) {
  var commentList = document.getElementById("comment-list");
  var oldcomment = document.getElementById("div");
  var newComment = document.createElement("div");
  newComment.className = "comment";
  newComment.innerHTML = "<h3>" + name + "</h3><p>" + comment + "</p>";
  commentList.appendChild(newComment);
}

// Fetch comments on page load
function getComment() {
  var commentList = document.getElementById("comment-list");
  var parentComment = document.getElementById("comment-list");
  while (parentComment.firstChild) {
    commentList.removeChild(parentComment.firstChild);
  }
  fetch("/comments")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((comment) => {
        addComment(comment.name, comment.comment);
      });
    });
}
window.onload = getComment();
setInterval(getComment, 2000);
