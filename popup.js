// enable tooltips
function enableTooltips() {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });
}
const textArea = document.getElementById("textarea");
const saveBtn = document.getElementById("saveBtn");
const autorunSwitch = document.getElementById("autoSwitch");
const switchBtn = document.getElementById("checkbox");
const nameArea = document.getElementById("nameInput");
const goBtn = document.getElementById("goBtn");
const reviewLink = document.getElementById("review-link");
const IDbtn = document.getElementById("IDbtn");
const skypeGroupLink = document.getElementById("skypeGroup-link");
const logoDropdownBuy = document.getElementById("logoDropdownBuy");
const dropdownOne = document.getElementById("dropdownOne");
const dropdownOneMenu = document.getElementById("dropdownOneMenu");
const rowDivDropdowns = document.getElementById("rowDivDropdowns");
const rowDivPagination = document.getElementById("rowDivPagination");
const path = document.getElementById("path");
const bow = document.getElementById("bow");
const male = document.getElementById("male");
const genderSwitchDiv = document.getElementById("app-cover");
const goBtnWrapper = document.getElementById("goBtnWrapper");
const paginationElement = rowDivPagination.children[0];
const logoutBtn = document.getElementById("logoDropdownLogout");
const purchaseBtn = document.getElementById("logoDropdownBuy");
const dropdownOneListElements = dropdownOneMenu.children;
let canItRun = false;
let scriptRan = false;
let currentPaginationPage = 0;
let backwardArrow;
let forwardArrow;
let changeEvent = new Event("change");
let inputEvent = new Event("input");
var dropdownTwoName;
let currentCommentActiveNumber = 0;
var currentActiveDropdownTwo;

chrome.storage.local.get(["comments"], function (obj) {
  commentObj = obj.comments;
  function addComments() {
    chrome.storage.local.get("Pagination", function (obj) {
      if (obj.Pagination) {
        currentActiveDropdownTwo = obj.Pagination.dropdownTwoName;
        currentCommentActiveNumber = obj.Pagination.currentCommentActiveNumber;
        dropdownOne.innerText = obj.Pagination.dropdownOneName;
        generateSecondDropdown(
          obj.Pagination.dropdownOneName,
          obj.Pagination.dropdownTwoName.split(" ").join(""),
          obj.Pagination.currentCommentActiveNumber
        );
      }
    });

    (function addLinksToFirstDropdown() {
      for (let i = 0; i < dropdownOneMenu.childElementCount; i++) {
        dropdownOneListElements[i].addEventListener("click", function () {
          let dropdownChosen = dropdownOneListElements[
            i
          ].firstElementChild.innerText.slice(0, -2);
          dropdownOne.innerText = dropdownChosen;
          rowDivDropdowns.children[1]?.remove();
          generateSecondDropdown(dropdownChosen);
          clearPagination();
        });

        //add hover on mouseenter
        dropdownOneListElements[i].addEventListener("mouseenter", function () {
          dropdownOneListElements[i].lastElementChild.innerHTML = "";
          listElName = dropdownOneListElements[i].innerText.slice(0, -2);
          for (let [subObjectName, commentsArray] of Object.entries(
            commentObj[listElName]
          )) {
            let shortObjectName = subObjectName.slice(1);
            subDropdownLiElement = `<li><a class="dropdown-item" href="#" id="${
              subObjectName.split(" ").join("") + "Hover"
            }">${shortObjectName}<span class="numberCircle">${
              commentsArray.length
            }</span></a></li>`;
            dropdownOneListElements[i].lastElementChild.insertAdjacentHTML(
              "beforeend",
              subDropdownLiElement
            );
            secondLvlLiElement = document.getElementById(
              subObjectName.split(" ").join("") + "Hover"
            );
            secondLvlLiElement.addEventListener("click", function (e) {
              e.stopPropagation();
              console.log("second level dropdown clicked");
              rowDivDropdowns.children[1]?.remove();
              console.log("list el name" + listElName);
              // clearPagination();
              dropdownOne.innerText = listElName;
              console.log(listElName);
              console.log(subObjectName);
              console.log(shortObjectName);
              console.log(subObjectName.split(" ").join(""));
              currentCommentActiveNumber = 0;
              generateSecondDropdown(
                listElName,
                subObjectName.split(" ").join("")
              );
            });
          }
        });
      }
    })();

    function generateSecondDropdown(
      folderChosen,
      subFolderChosen,
      commentNumberChosen
    ) {
      secondDropdown = `<div class="btn-group col-auto"><button class="btn btn-secondary btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" id="dropdownTwo">Choose a comment file</button><ul class="dropdown-menu" area-labelledby="dropdownTwo" id="dropdownTwoMenu"></ul></div>`;
      rowDivDropdowns.insertAdjacentHTML("beforeend", secondDropdown);
      console.log("second dropdown generated");
      const dropdownTwo = document.getElementById("dropdownTwo");
      const dropdownTwoMenu = document.getElementById("dropdownTwoMenu");
      for (let [documentName, commentsArray] of Object.entries(
        commentObj[folderChosen]
      )) {
        shortDocumentName = documentName.slice(1);
        console.log(documentName);
        listEl = `<li><a class="dropdown-item" id="${documentName
          .split(" ")
          .join("")}" href="#">${shortDocumentName}<span class="numberCircle">${
          commentsArray.length
        }</span></a></li>`;
        dropdownTwoMenu.insertAdjacentHTML("beforeend", listEl);
        let liElementTwo = document.getElementById(
          documentName.split(" ").join("")
        );
        liElementTwo.addEventListener("click", function () {
          dropdownTwoName = documentName;
          console.log(
            "changed document name to a" + dropdownTwoName + " one from a click"
          );
          console.log(dropdownTwoName);
          dropdownTwo.innerText = dropdownTwoName.slice(1);
          console.log(currentActiveDropdownTwo);
          if (dropdownTwoName != currentActiveDropdownTwo) {
            console.log("putting pag page to 0");
            currentPaginationPage = 0;
            currentCommentActiveNumber = 0;
          }
          populatePagination();
        });

        function populatePagination() {
          clearPagination();

          for (let i = 0; i < 11; i++) {
            // if (currentCommentActiveNumber) {

            // }
            currentCommentNumber = currentPaginationPage * 10 + i;
            if (commentsArray[currentCommentNumber] && i != 10) {
              insertPaginationLiElement(currentCommentNumber);
            } else if (i == 10 && commentsArray[currentCommentNumber]) {
              insertForwardArrow();
            }
          }
          if (currentPaginationPage > 0) {
            insertBackwardArrow();
          }
          console.log(currentActiveDropdownTwo);
          if (currentActiveDropdownTwo.slice(1) != dropdownTwo.innerText) {
            firstCommentinPagination =
              document.getElementById("paginationNumber1");
            firstCommentinPagination.click();
            currentCommentActiveNumber = 0;
            firstCommentinPagination.dispatchEvent(inputEvent);
            firstCommentinPagination.classList.add("glowing-border");
          }
        }
        function insertForwardArrow() {
          arrow = `
    <li class="page-item" href="#" id = "forwardArrow">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>`;
          paginationElement.insertAdjacentHTML("beforeend", arrow);
          forwardArrow = document.getElementById("forwardArrow");
          forwardArrow.addEventListener("click", function () {
            currentPaginationPage++;
            populatePagination();
          });
        }
        function insertBackwardArrow() {
          arrow = `<li class="page-item" href="#" id = "backwardArrow">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>`;
          paginationElement.insertAdjacentHTML("afterbegin", arrow);
          backwardArrow = document.getElementById("backwardArrow");
          backwardArrow.addEventListener("click", function () {
            currentPaginationPage--;
            populatePagination();
          });
        }
        function insertPaginationLiElement(number) {
          paginationNumberHTML = `<li class="page-item" id="commentNumber"><a class="page-link" id="paginationNumber${
            number + 1
          }" href="#">${number + 1}</a></li>`;
          paginationElement.insertAdjacentHTML(
            "beforeend",
            paginationNumberHTML
          );
          let pagNumber = document.getElementById(
            `paginationNumber${number + 1}`
          );

          chrome.storage.local.get("Pagination", function (obj) {
            if (obj.Pagination) {
              // currentActiveDropdownTwo = obj.Pagination.dropdownTwoName;
              // currentCommentActiveNumber =
              //   obj.Pagination.currentCommentActiveNumber;

              if (
                number == currentCommentActiveNumber &&
                currentActiveDropdownTwo.slice(1) == dropdownTwo.innerText
              ) {
                toGray(pagNumber);
                console.log("tograaaaaayaaaaaaaaa");
              }
            }
          });
          pagNumber.addEventListener("click", function (element) {
            textArea.dispatchEvent(inputEvent);
            textArea.value = commentsArray[number];
            chrome.storage.local.get(["secondComment"], function (obj) {
              if (textArea.value == obj.secondComment) {
                toGray(textArea);
              }
            });
            currentCommentActiveNumber = number;
            document.querySelectorAll(".page-link").forEach((item) => {
              if (
                number + 1 == currentCommentActiveNumber &&
                currentActiveDropdownTwo == dropdownTwo.innerText
              ) {
                item.classList.remove("glowing-border");
              }
              if (number != 0) {
                firstCommentinPagination = document
                  .getElementById("paginationNumber1")
                  ?.classList.remove("glowing-border");
              }
            });
          });
        }
      }
      if (subFolderChosen && commentNumberChosen) {
        // ako su sva ti vec podesena namesti pagination
        console.log("autofil second dropdown from history");
        currentPaginationPage = Math.floor((commentNumberChosen - 1) / 10);
        console.log("current pagination page set to " + currentPaginationPage);
        document.getElementById(subFolderChosen).click();
      } else if (subFolderChosen) {
        currentPaginationPage = 0;
        currentCommentActiveNumber = 0;
        console.log(subFolderChosen);
        document.getElementById(subFolderChosen).click();
        // if (dropdownTwo.innerText != currentActiveDropdownTwo) {
        firstCommentinPagination = document.getElementById("paginationNumber1");
        firstCommentinPagination.click();
        firstCommentinPagination.dispatchEvent(inputEvent);
        firstCommentinPagination.classList.add("glowing-border");
        // }
        console.log("clicked from floating dropdown");
      } else {
        currentPaginationPage = 0;
      }
    }
  }
  function clearPagination() {
    paginationElement.innerHTML = "";
  }
  function toGray(item) {
    item.style.backgroundColor = "#e9ecefd8";
  }
  function toWhite(item) {
    item.style.backgroundColor = "#FFFFFF";
  }
  function updateUI() {
    chrome.storage.local.get(["secondComment"], function (response) {
      textArea.value = response.secondComment;
      if (textArea.value == "undefined") {
        toWhite(textArea);
        textArea.value = "";
      } else if (textArea.value != "") {
        toGray(textArea);
      }
      chrome.storage.local.get(["tName"], function (response) {
        nameArea.value = response.tName;
        if (nameArea.value == "undefined") {
          nameArea.value = "";
          toWhite(nameArea);
        } else if (nameArea.value != "") {
          toGray(nameArea);
        }
      });
    });

    if (scriptRan) {
      genderSwitchDiv.removeAttribute("data-bs-original-title");
    }

    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      let url = tabs[0].url;
      console.log(url);
      if (url != undefined) {
        if (
          url.includes("https://teacher.bedakid.com/") &&
          !url.includes("login")
        ) {
          chrome.tabs.sendMessage(
            tabs[0].id,
            {
              question: "betakidName",
            },
            function (res) {
              console.log(res); //undefined
              if (res) {
                console.log(res);
                chrome.runtime.sendMessage(
                  { question: "accStatus", tName: res.tName },
                  function (res) {
                    console.log(res);
                    const badges =
                      '<div class="row justify-content-end"><span id="firstBadge" class="badge rounded-pill bg-success col-auto">Not signed in</span></div><div class="row justify-content-end"><span id="secondBadge" class="badge rounded-pill bg-success col-auto"></span></div>';

                    const bubbleWindow =
                      document.getElementById("bubbleWindow");
                    bubbleWindow.children[1]?.remove();
                    bubbleWindow.children[0]?.remove();
                    bubbleWindow.insertAdjacentHTML("afterbegin", badges);
                    const firstBadge = document.getElementById("firstBadge");
                    const secondBadge = document.getElementById("secondBadge");

                    if (res) {
                      if (res.userStatus === "verified user") {
                        if (!res.userVerified) {
                          console.log("sda");
                          // USER VERIFICAITON ERROR
                          firstBadge.innerText = res.user_email;
                          secondBadge.classList.replace(
                            "bg-success",
                            "bg-danger"
                          );
                          secondBadge.innerText = res.errorMessage;
                          logoutBtn.classList.remove("disabled");
                        } else {
                          purchaseBtn.classList.remove("disabled");
                          logoutBtn.classList.remove("disabled");
                          firstBadge.innerText = res.user_email;
                          // registered user
                          trialText = res.purchasesExist ? "" : " trial";
                          minutesLeft = res.msLeft / (1000 * 60);
                          hoursLeft = minutesLeft / 60;
                          daysLeft = hoursLeft / 24;
                          if (daysLeft > 1) {
                            secondBadge.innerText =
                              Math.round(daysLeft) + trialText + " days left";
                          } else if (daysLeft < 1 && hoursLeft > 1) {
                            secondBadge.innerText =
                              Math.round(hoursLeft) + trialText + " hours left";
                            secondBadge.classList.replace(
                              "bg-success",
                              "bg-warning"
                            );
                            secondBadge.classList.add("text-dark");
                          } else if (hoursLeft < 1 && hoursLeft >= 0) {
                            secondBadge.innerText =
                              Math.round(minutesLeft) +
                              trialText +
                              " minutes left";
                            secondBadge.classList.replace(
                              "bg-success",
                              "bg-danger"
                            );
                          } else {
                            firstBadge.innerText = res.purchasesExist
                              ? res.user_email + " your package has expired"
                              : res.user_email + " your trial has expired";
                            secondBadge.innerText = "Buy here!";
                            secondBadge.style.fontSize = "89%";
                            firstBadge.classList.replace(
                              "bg-success",
                              "bg-danger"
                            );
                            secondBadge.style.cursor = "pointer";
                            secondBadge.addEventListener("click", function () {
                              chrome.tabs.create({
                                url: "auth/pricing.html",
                              });
                            });
                            chrome.storage.local.set({ auto: false });
                          }
                          if (res.msLeft > 1) {
                            chrome.storage.local.get(
                              ["auto"],
                              function (response) {
                                if (response.auto == true) {
                                  autorunSwitch.checked = "checked";
                                }
                              }
                            );
                            enableTooltips();
                            enableExtension();
                            addComments();
                            chrome.tabs.query(
                              { active: true, currentWindow: true },
                              function (tabs) {
                                let url = tabs[0].url;
                                if (url != undefined) {
                                  if (
                                    url.includes("comments") &&
                                    url.includes("comment") &&
                                    url.includes("bedakid")
                                  ) {
                                    goBtn.removeAttribute("disabled");
                                    goBtnWrapper.removeAttribute(
                                      "data-bs-original-title"
                                    );
                                    console.log(1);
                                    chrome.tabs.sendMessage(
                                      tabs[0].id,
                                      { question: "genderAndRunStatus" },
                                      function (res) {
                                        if (res.didItRun) {
                                          genderSwitchDiv.removeAttribute(
                                            "data-bs-original-title"
                                          );
                                          scriptRan = true;
                                        }
                                        if (res.gender === "girl") {
                                          switchBtn.checked = "checked";

                                          switchBtn.dispatchEvent(changeEvent);
                                        }
                                      }
                                    );
                                  }
                                }
                              }
                            );
                          }
                        }
                      } else if (res.userStatus === "not verified user") {
                        firstBadge.innerText = res.user_email;
                        secondBadge.innerText =
                          "Please verify your email address";
                        let resendVerificationHTML = `<li><a id="resendEmail" class="dropdown-item" href="#" >Resend verification email</a></li>`;
                        purchaseBtn.parentElement.insertAdjacentHTML(
                          "afterbegin",
                          resendVerificationHTML
                        );
                        let resendVerification =
                          document.getElementById("resendEmail");
                        resendVerification.addEventListener(
                          "click",
                          function (e) {
                            console.log(1);
                            chrome.runtime.sendMessage(
                              "resendEmail",
                              function (res) {
                                if (res?.success) {
                                  secondBadge.innerText =
                                    "Verification e-mail sent again";
                                } else {
                                  secondBadge.innerText = res.errorMessage;
                                  secondBadge.classList.replace(
                                    "bg-success",
                                    "bg-danger"
                                  );
                                }
                              }
                            );
                          }
                        );
                        logoutBtn.classList.remove("disabled");
                      } else if (res.userStatus === "no user") {
                        firstBadge.classList.replace("bg-success", "bg-danger");
                        secondBadge.innerText =
                          "Click here to log-in or sign up";
                        secondBadge.style.cursor = "pointer";
                        secondBadge.addEventListener("click", function () {
                          chrome.tabs.create({
                            url: "auth/login.html",
                          });
                        });
                      }
                    }
                  }
                );
              }
            }
          );
        } else {
          // NOT A BEDAKID TEACHER PAGE, DONT CHECK VALIDITY
          console.log("wtf");
          console.log(1);
          chrome.runtime.sendMessage({ question: "accStatus" }, function (res) {
            console.log(res);
            const badges =
              '<div class="row justify-content-end"><span id="firstBadge" class="badge rounded-pill bg-success col-auto">Not signed in</span></div><div class="row justify-content-end"><span id="secondBadge" class="badge rounded-pill bg-success col-auto"></span></div>';

            const bubbleWindow = document.getElementById("bubbleWindow");
            bubbleWindow.children[1]?.remove();
            bubbleWindow.children[0]?.remove();
            bubbleWindow.insertAdjacentHTML("afterbegin", badges);
            const firstBadge = document.getElementById("firstBadge");
            const secondBadge = document.getElementById("secondBadge");

            if (res) {
              console.log(res);
              if (res.userStatus === "verified user") {
                purchaseBtn.classList.remove("disabled");
                logoutBtn.classList.remove("disabled");
                firstBadge.innerText = res.user_email;
                // registered user
                trialText = res.purchasesExist ? "" : " trial";
                minutesLeft = res.msLeft / (1000 * 60);
                hoursLeft = minutesLeft / 60;
                daysLeft = hoursLeft / 24;
                if (daysLeft > 1) {
                  secondBadge.innerText =
                    Math.round(daysLeft) + trialText + " days left";
                } else if (daysLeft < 1 && hoursLeft > 1) {
                  secondBadge.innerText =
                    Math.round(hoursLeft) + trialText + " hours left";
                  secondBadge.classList.replace("bg-success", "bg-warning");

                  secondBadge.classList.add("text-dark");
                } else if (hoursLeft < 1 && hoursLeft >= 0) {
                  secondBadge.innerText =
                    Math.round(minutesLeft) + trialText + " minutes left";
                  secondBadge.classList.replace("bg-success", "bg-danger");
                } else {
                  firstBadge.innerText = res.purchasesExist
                    ? "Your package has expired"
                    : "Your trial has expired";
                  secondBadge.innerText = "Buy here!";
                  secondBadge.style.fontSize = "89%";
                  firstBadge.classList.replace("bg-success", "bg-danger");
                  secondBadge.style.cursor = "pointer";
                  secondBadge.addEventListener("click", function () {
                    chrome.tabs.create({
                      url: "auth/pricing.html",
                    });
                  });
                  chrome.storage.local.set({ auto: false });
                }
                if (res.msLeft > 1) {
                  chrome.storage.local.get(["auto"], function (response) {
                    if (response.auto == true) {
                      autorunSwitch.checked = "checked";
                    }
                  });
                  enableTooltips();
                  enableExtension();
                  addComments();
                  chrome.tabs.query(
                    { active: true, currentWindow: true },
                    function (tabs) {
                      let url = tabs[0].url;
                      if (url != undefined) {
                        if (
                          url.includes("comments") &&
                          url.includes("comment") &&
                          url.includes("bedakid")
                        ) {
                          goBtn.removeAttribute("disabled");
                          goBtnWrapper.removeAttribute(
                            "data-bs-original-title"
                          );
                          console.log(1);
                          chrome.tabs.sendMessage(
                            tabs[0].id,
                            { question: "genderAndRunStatus" },
                            function (res) {
                              console.log(res);
                              if (res.didItRun) {
                                genderSwitchDiv.removeAttribute(
                                  "data-bs-original-title"
                                );
                                scriptRan = true;
                              }
                              if (res.gender === "girl") {
                                switchBtn.checked = "checked";

                                switchBtn.dispatchEvent(changeEvent);
                              }
                            }
                          );
                        }
                      }
                    }
                  );
                }
              } else if (res.userStatus === "not verified user") {
                firstBadge.innerText = res.user_email;
                secondBadge.innerText = "Please verify your email address";
                let resendVerificationHTML = `<li><a id="resendEmail" class="dropdown-item" href="#" >Resend verification email</a></li>`;
                purchaseBtn.parentElement.insertAdjacentHTML(
                  "afterbegin",
                  resendVerificationHTML
                );
                let resendVerification = document.getElementById("resendEmail");
                resendVerification.addEventListener("click", function (e) {
                  chrome.runtime.sendMessage("resendEmail", function (res) {
                    if (res?.success) {
                      secondBadge.innerText = "Verification e-mail sent again";
                    } else {
                      secondBadge.innerText = res.errorMessage;
                      secondBadge.classList.replace("bg-success", "bg-danger");
                    }
                  });
                });
                logoutBtn.classList.remove("disabled");
              } else if (res.userStatus === "no user") {
                firstBadge.classList.replace("bg-success", "bg-danger");
                secondBadge.innerText = "Click here to log-in or sign up";
                secondBadge.style.cursor = "pointer";
                secondBadge.addEventListener("click", function () {
                  chrome.tabs.create({
                    url: "auth/login.html",
                  });
                });
              }
            }
          });
        }
      }
    });
  }
  updateUI();
  let disableExtension = () => {
    dropdownOne.setAttribute("disabled", "");
    goBtn.setAttribute("disabled", "");
    autorunSwitch.setAttribute("disabled", "");
    autorunSwitch.removeAttribute("checked");
    switchBtn.setAttribute("disabled", "");
    saveBtn.setAttribute("disabled", "");
    textArea.setAttribute("disabled", "");
    nameArea.setAttribute("disabled", "");
    skypeGroupLink.classList.add("disabled");
    reviewLink.classList.add("disabled");
    canItRun = false;
    clearPagination();
    document.getElementById("dropdownTwo").remove();
  };

  function enableExtension() {
    canItRun = true;
    autorunSwitch.removeAttribute("disabled");
    goBtn.removeAttribute("disabled");
    switchBtn.removeAttribute("disabled");
    saveBtn.removeAttribute("disabled");
    textArea.removeAttribute("disabled");
    nameArea.removeAttribute("disabled");
    dropdownOne.removeAttribute("disabled");
    saveBtn.removeAttribute("disabled");
  }
  reviewLink.addEventListener("click", function () {
    chrome.tabs.create({
      url: "https://chrome.google.com/webstore/detail/comment-helper-buddha-bei/pkpapihaceegcgkhoakbnhllhfbelnpb/reviews",
    });
  });
  skypeGroupLink.addEventListener("click", function () {
    chrome.tabs.create({
      url: "https://join.skype.com/M4UEjbKFLbkW",
    });
  });
  logoDropdownBuy.addEventListener("click", function () {
    window.open("auth/pricing.html");
  });
  logoDropdownLogout.addEventListener("click", function () {});

  autorunSwitch.addEventListener("click", function () {
    if (autorunSwitch.checked == true) {
      chrome.storage.local.set({ auto: true });
    } else {
      chrome.storage.local.set({ auto: false });
    }
  });
  goBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      let url = tabs[0].url;
      if (
        url.includes("comments") &&
        url.includes("comment") &&
        url.includes("bedakid") &&
        canItRun
      ) {
        chrome.tabs.sendMessage(tabs[0].id, { action: "go" });
        scriptRan = true;
        genderSwitchDiv.removeAttribute("data-bs-original-title");
      }
    });
  });

  switchBtn.addEventListener("click", function (e) {
    e.preventDefault();
    toggleGenderSwitch();
  });

  function toggleGenderSwitch() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      let url = tabs[0].url;
      if (
        url.includes("comments") &&
        url.includes("comment") &&
        url.includes("bedakid") &&
        scriptRan
      ) {
        console.log(1);
        chrome.tabs.sendMessage(tabs[0].id, {
          action: "switch",
          changeToGirl: !switchBtn.checked,
        });
        if (!switchBtn.checked) {
          switchBtn.checked = "checked";

          switchBtn.dispatchEvent(changeEvent);
        } else {
          switchBtn.checked = false;

          switchBtn.dispatchEvent(changeEvent);
        }
      } else {
        // make the bow not like it wont go up
        bow.classList.add("denied");
        setTimeout(() => {
          bow.classList.remove("denied");
        }, 820);
      }
    });
  }
  function saveText() {
    chrome.storage.local.set(
      { tName: nameArea.value, secondComment: textArea.value },
      function () {
        toGray(textArea);
        toGray(nameArea);
      }
    );
  }
  function saveCurrentCommentPosition() {
    //dropdownTwoName;
    //currentCommentActiveNumber;
    // chick if there is a second dropdown generated, if it is save it, if there isnt, clear storage.
    // then check if there is a comment active and if there is, save it's number.
    chrome.storage.local.get(["comments"], function (obj) {
      commentObj = obj.comments;
      if (dropdownTwoName) {
        console.log(commentObj);
        console.log(dropdownOne.innerText);
        console.log(dropdownTwoName);
        console.log(currentCommentActiveNumber);
        console.log(
          commentObj[dropdownOne.innerText][dropdownTwoName][
            currentCommentActiveNumber
          ]
        );
        if (
          (currentCommentActiveNumber || currentCommentActiveNumber == 0) &&
          textArea.value ==
            commentObj[dropdownOne.innerText][dropdownTwoName][
              currentCommentActiveNumber
            ]
        ) {
          console.log("same comment, passes");
          document
            .querySelectorAll(".page-link")
            .forEach((item) => toWhite(item));
          toGray(
            document.getElementById(
              `paginationNumber${currentCommentActiveNumber + 1}`
            )
          );
          chrome.storage.local.set({
            Pagination: {
              currentCommentActiveNumber: currentCommentActiveNumber,
              dropdownOneName: dropdownOne.innerText,
              dropdownTwoName: dropdownTwoName,
            },
          });
        } else {
          document
            .querySelectorAll(".page-link")
            .forEach((item) => toWhite(item));
          chrome.storage.local.remove("Pagination");
          currentCommentActiveNumber = null;
        }
      } else {
        //clearing storage
        chrome.storage.local.remove("Pagination");
        clearPagination();
        currentCommentActiveNumber = null;
      }
    });
  }
  saveBtn.addEventListener("click", function (e) {
    e.preventDefault();
    saveText();
    saveCurrentCommentPosition();
    saveBtn.classList.remove("glowing-border");
  });
  textArea.addEventListener("input", function () {
    toWhite(textArea);
    saveBtn.classList.add("glowing-border");
    saveBtn.removeAttribute("disabled");
  });
  textArea.addEventListener("focusout", function () {
    saveBtn.classList.remove("glowing-border");
  });
  textArea.addEventListener("focusin", function () {
    if (textArea.hasAttribute("disabled")) {
      saveBtn.classList.add("glowing-border");
    }
  });
  nameArea.addEventListener("keydown", () => {
    toWhite(nameArea);
    saveBtn.classList.add("glowing-border");
  });

  switchBtn.addEventListener("change", function () {
    if (switchBtn.checked) {
      male.classList.remove("ma");
      setTimeout(function () {
        path.classList.add("fe");
        male.classList.add("fe");
        bow.classList.add("fe");
      }, 390);
    } else {
      male.classList.add("ma");
      setTimeout(function () {
        path.classList.remove("fe");
        male.classList.remove("fe");
        bow.classList.remove("fe");
      }, 390);
    }
  });
  // listen to messagens
  chrome.runtime.onMessage.addListener(function (
    message,
    sender,
    sendResponse
  ) {
    if (message == "changeSwitchToFemale") {
      switchBtn.checked = "checked";
      switchBtn.dispatchEvent(changeEvent);
    }
    if (message == "changeSwitchToMale") {
      switchBtn.checked = false;
      switchBtn.dispatchEvent(changeEvent);
    }
    sendResponse();
    return true;
  });

  logoutBtn.addEventListener("click", function () {
    console.log(1);
    chrome.runtime.sendMessage("logout", function (res) {
      if (res === "ok") {
        updateUI();
        disableExtension();
        logoutBtn.classList.add("disabled");
        purchaseBtn.classList.add("disabled");
      }
    });
  });
});
