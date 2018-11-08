var database = firebase.database();

var commentList = document.getElementById("commentList");
var posts = firebase.database().ref('posts/');
var form = document.getElementById("commentForm");

//event listener on submit that will run writeNewPost
form.addEventListener("submit", function(e) {
    e.preventDefault();
    var comment = document.getElementById("comment").value;
    writeNewPost(comment);
});

//this adds the entry to the database on submit!!!!!!!!!!
function writeNewPost(comment) {
    // A post entry.
    var postData = {
      commentBody: comment
    };
  
    // Get a key for a new Post.
    var newPostKey = firebase.database().ref().child('posts').push().key;
  
    // Write the post into the posts section of the database
    var updates = {};
    updates['posts/' + newPostKey] = postData;
  
    return firebase.database().ref().update(updates);
  }