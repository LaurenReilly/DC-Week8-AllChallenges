var database = firebase.database();

//reference to div where comments will populate
var commentList = document.getElementById("commentList");

//reference to the filepath in the database where comments will be stored
var posts = firebase.database().ref('posts/');

//reference to form and text area
var form = document.getElementById("commentForm");
var text = document.querySelector("textarea");

//event listener on submit that will run writeNewPost
form.addEventListener("submit", function(e) {
    e.preventDefault();
    var post = document.getElementById("comment").value;
    writeNewPost(post);
    text.value = "";
});

//this adds the entry to the database on submit!
function writeNewPost(comment) {
    // A post entry.
    var postData = {
      commentBody: comment
    };
  
    // Get a unique key for a new Post with push.
    var newPostKey = firebase.database().ref().child('posts').push().key;
  
    // Write the post into the posts section of the database
    var updates = {};
    updates['posts/' + newPostKey] = postData;
  
    return firebase.database().ref().update(updates);
  }

// on() runs initially AND anytime there is a change to the database
posts.on('value', function(snapshot) {
//this while statement prevents the code from reposting the entire database, it essentially delets the entire old list and then the following code repopulates all the data so it looks like you are just adding the newest entry.
    while(commentList.firstChild){
        commentList.removeChild(commentList.firstChild);
      }
//the snapshot is the state of the database at that point in time, you can access the data by using val() followed by the key. the rest of the code renders it to the screen
    snapshot.forEach(function(post) {
          var comment = post.val().commentBody
          var finalHTML = `
            <p>${comment}</p>
          `
          commentList.innerHTML += finalHTML;
      });
  });