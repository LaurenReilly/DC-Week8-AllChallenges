// Initialize the FirebaseUI Widget using Firebase.
var ui = new firebaseui.auth.AuthUI(firebase.auth());


// enabling and configuring the ways that users can sign in
//Add the email provider ID to the list of FirebaseUI signInOptions.
ui.start('#firebaseui-auth-container', {
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    // Other config options...
  });


  // Specify the FirebaseUI configuration (providers supported and UI customizations as well as success callbacks, etc)
var uiConfig = {
    callbacks: {
      signInSuccessWithAuthResult: function(authResult, redirectUrl) {
        // User successfully signed in.
        // Return type determines whether we continue the redirect automatically
        // or whether we leave that to developer to handle.
        return true;
      },
      uiShown: function() {
        // The widget is rendered.
        // Hide the loader.
        document.getElementById('loader').style.display = 'none';
      }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    signInSuccessUrl: 'http://localhost:3000/challenge-2/dashboard.html',
    signInOptions: [
      // Leave the lines as is for the providers you want to offer your users.
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ]
  };

//get reference to sign out button that we've included on every page
document.getElementById('signOut').addEventListener('click', function() {
    //  To sign out a user, call signOut:
    firebase.auth().signOut().then(function() {
        alert("you signed out");
        //to redirect to another page
        window.location = "http://localhost:3000/challenge-2/index.html";
    }).catch(function(error) {
    // An error happened.
    });
  });


  // Finally, render the FirebaseUI Auth interface
  // The start method will wait until the DOM is loaded.
ui.start('#firebaseui-auth-container', uiConfig);