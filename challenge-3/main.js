var database = firebase.database();

var form = document.getElementById("commentForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    var comment = document.getElementById("comment").value;
    console.log(comment);
});
