// The recommended way to get the current user is by setting an observer on the Auth object
//this code checks if a user is signed in on the dashboard page. If they are signed in they are allowed to view the page, if they are not signed in the site will kick them back to the homepage.
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        
    } else {
        window.location = "http://localhost:3000/challenge-2/index.html";
    }
  });