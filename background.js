self.importScripts(
  "./resourses/firebase/firebase-app.js",
  "./resourses/firebase/firebase-database.js",
  "./resourses/firebase/firebase-auth.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyD582z5uvHzQv4bBAT3fVqQNpxfFayeOYQ",
  authDomain: "chbuddha.firebaseapp.com",
  projectId: "chbuddha",
  storageBucket: "chbuddha.appspot.com",
  messagingSenderId: "102541873856",
  appId: "1:102541873856:web:ea0d2e65e2e886aadcd325",
  measurementId: "G-64YKB32Q4Z",
  databaseURL: "https://chbuddha.europe-west1.firebasedatabase.app/",
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (e) {
  console.log(e);
}
const db = firebase.database();
const auth = firebase.auth();

function amountBought() {
  let amountOfMsBought;
  let product = message.productDescription[0];
  switch (product) {
    case "1":
      amountOfMsBought = 2629800000;
      return amountOfMsBought;
    case "3":
      amountOfMsBought = 7889400000;
      return amountOfMsBought;
    case "O":
      amountOfMsBought = 31557600000;
      return amountOfMsBought;
    default:
      console.log("product description reading error");
  }
}
chrome.runtime.onInstalled.addListener(() => {
  fetch("./resourses/vocabulary.json")
    .then((obj) => obj.json())
    .then(function (obj) {
      chrome.storage.local.set({ vocab: obj });
    });
  fetch("./resourses/comments.json")
    .then((obj) => obj.json())
    .then(function (obj) {
      chrome.storage.local.set({ comments: obj });
    });
});
date = new Date();

chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  if (message.action === "buyBtnClicked") {
    let priceId = "";
    switch (message.buttonId) {
      case "threeMonthBtn":
        priceId = "price_1MAdR8GAVxz2yKaHoVGR2cQd";
        break;
      case "oneYearBtn":
        priceId = "price_1MAWz4GAVxz2yKaHNnAKs6xV";
        break;
      default:
        priceId = "price_1MAdSbGAVxz2yKaH1u9XPn0f";
    }
    var userEmail = auth.currentUser.email;
    var userId = auth.currentUser.uid;
    fetch(
      `https://us-central1-chbuddha.cloudfunctions.net/CreateStripeCheckout?priceID=${priceId}&email=${userEmail}&uid=${userId}`,
      {
        method: "GET",
        mode: "cors",
      }
    ).then((response) => {
      response.json().then((data) => {
        sendResponse(data);
      });
    });
  }
  if (message.question == "userEmail") {
    currentEmail = auth.currentUser.email;
    sendResponse(currentEmail);
  } else if (message.msg === "register") {
    auth
      .createUserWithEmailAndPassword(message.email, message.pass)
      .then((userCredential) => {
        // Signed in
        user = userCredential.user;
        // ...
        auth.currentUser.sendEmailVerification();
        firebase
          .auth()
          .signInWithEmailAndPassword(message.email, message.pass)
          .then(console.log("success"));
        sendResponse({ success: true });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        sendResponse({
          success: false,
          errorCode: errorCode,
          errorMessage: errorMessage,
        });
      });
  } else if (message.msg === "login") {
    auth
      .signInWithEmailAndPassword(message.email, message.pass)
      .then((userCredential) => {
        // Signed in
        user = userCredential.user;
        // ...
        sendResponse({ success: true });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        sendResponse({
          success: false,
          errorCode: errorCode,
          errorMessage: errorMessage,
        });
      });
  } else if (message === "logout") {
    auth
      .signOut()
      .then(() => {
        sendResponse("ok");
      })
      .catch((error) => {});
  } else if (message.msg === "forgotPass") {
    auth
      .sendPasswordResetEmail(message.email)
      .then(() => {
        // Password reset email sent!
        // ..
        console.log("email sent?");
        sendResponse({ success: true });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        sendResponse({
          success: false,
          errorCode: errorCode,
          errorMessage: errorMessage,
        });
      });
  } else if (message === "resendEmail") {
    auth.currentUser
      .sendEmailVerification()
      .then(() => {
        // Password reset email sent!
        // ..
        sendResponse({ success: true });
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
        sendResponse({
          success: false,
          errorCode: errorCode,
          errorMessage: errorMessage,
        });
      });
  } else if (message.question === "accStatus") {
    console.log("accStatus question asked");
    auth.onAuthStateChanged((user) => {
      if (user) {
        // User is signed in
        console.log("singed in");
        if (user.emailVerified) {
          // email is verified
          console.log("email is verified");
          db.ref()
            .child("Users")
            .child(user.uid)
            .get()
            .then((userSnapshot) => {
              userVerified = true;
              date = new Date();
              console.log(userSnapshot);
              if (userSnapshot.exists()) {
                // AFTER first time email is verified
                msLeft = userSnapshot.val().valid_until - new Date();
                let isTrialActive;
                if (userSnapshot.val().end_of_trial - new Date() > 0) {
                  isTrialActive = true;
                } else {
                  isTrialActive = false;
                }
                let purchasesExist = false;
                if (userSnapshot.val().Purchases) {
                  purchasesExist = true;
                }
                if (message.tName) {
                  // we need verification
                  let msgTeachName = message.tName;
                  dbaseTname = userSnapshot.val()["betakidName"];
                  if (dbaseTname) {
                    // Name is already written on the account
                    if (dbaseTname != msgTeachName) {
                      // Wrong teacher trying to use the account
                      verificationErrorMessage =
                        "This Buddha account is for teacher: " + dbaseTname;
                      userVerified = false;
                      sendResponse({
                        userVerified: userVerified,
                        errorMessage: verificationErrorMessage,
                        userStatus: "verified user",
                        user_email: user.email,
                      });
                    } else {
                      sendResponse({
                        userStatus: "verified user",
                        msLeft: msLeft,
                        trialActive: isTrialActive,
                        purchasesExist: purchasesExist,
                        user_email: user.email,
                        userVerified: userVerified,
                      });
                    }
                  } else {
                    //No name written on the account/ first time on bedakid site for this account
                    // now I should check if the user is trial spamming
                    db.ref("TeachersEmails/")
                      .get()
                      .then((querySnapshot) => {
                        if (querySnapshot.exists()) {
                          function firstTeachersEmail() {
                            if (
                              querySnapshot.val().hasOwnProperty(msgTeachName)
                            ) {
                              console.log("has property");
                              return querySnapshot.val()[msgTeachName].email;
                            } else return "";
                          }

                          console.log(firstTeachersEmail());
                          if (
                            Object.keys(querySnapshot.val()).includes(
                              msgTeachName
                            )
                          ) {
                            console.log("linksObj includes the tname");
                            if (firstTeachersEmail() != user.email) {
                              console.log(
                                "error teacher already has an account"
                              );
                              verificationErrorMessage = `${msgTeachName} should use: ${firstTeachersEmail()}`;
                              console.log(verificationErrorMessage);
                              sendResponse({
                                userVerified: false,
                                errorMessage: verificationErrorMessage,
                                userStatus: "verified user",
                                user_email: user.email,
                              });
                            } else if (
                              isEmailTaken(user.email, querySnapshot.val())
                            ) {
                              verificationErrorMessage = `${msgTeachName} already using this account`;
                              sendResponse({
                                userVerified: false,
                                errorMessage: verificationErrorMessage,
                                userStatus: "verified user",
                                user_email: user.email,
                              });
                            } else {
                              db.ref("TeachersEmails/" + msgTeachName).update({
                                email: user.email,
                              });
                              db.ref("Users/" + user.uid).update({
                                betakidName: msgTeachName,
                              });
                              // all passes the check that I made
                              sendResponse({
                                userStatus: "verified user",
                                msLeft: msLeft,
                                trialActive: isTrialActive,
                                purchasesExist: purchasesExist,
                                user_email: user.email,
                                userVerified: userVerified,
                              });
                            }
                          } else {
                            // teacher is not email smamming and is genuinely on beidas site for the first time
                            sendResponse({
                              userStatus: "verified user",
                              msLeft: msLeft,
                              trialActive: isTrialActive,
                              purchasesExist: purchasesExist,
                              user_email: user.email,
                              userVerified: userVerified,
                            });
                            // write the beatkid teachanem in both databaseses
                            db.ref("TeachersEmails/" + msgTeachName).update({
                              email: user.email,
                            });
                            db.ref("Users/" + user.uid).update({
                              betakidName: msgTeachName,
                            });
                          }
                        }
                      });
                  }
                } else {
                  //Message sent but not from a beidakid site
                  sendResponse({
                    userStatus: "verified user",
                    msLeft: msLeft,
                    trialActive: isTrialActive,
                    purchasesExist: purchasesExist,
                    user_email: user.email,
                    userVerified: userVerified,
                  });
                }
              } else {
                // first time email is verified

                end_of_trial_date = new Date().getTime() + 1209600000;
                db.ref("Users/" + user.uid)
                  .update({
                    userStatus: "verified user",
                    email: user.email,
                    email_verified_time: new Date().toLocaleString(),
                    valid_until: end_of_trial_date,
                    end_of_trial_date_words: new Date(
                      end_of_trial_date
                    ).toLocaleString(),
                    end_of_trial: end_of_trial_date,
                  })
                  .then(() => {
                    console.log("yoyo");
                    sendResponse({
                      userStatus: "verified user",
                      trialActive: true,
                      msLeft: 1209600000,
                      user_email: user.email,
                      userVerified: true,
                    });
                  });
              }
            });
        } else {
          //users exist but email not verified
          console.log("email not verified");
          sendResponse({
            userStatus: "not verified user",
            user_email: user.email,
          });
        }
      } else {
        // no user
        console.log("no user");
        sendResponse({ userStatus: "no user" });
      }
    });
  }
  return true;
});
function isEmailTaken(email, obj) {
  Object.entries(obj).forEach(([key, value]) => {
    if (value == email) {
      return true;
    }
  });
  return false;
}
