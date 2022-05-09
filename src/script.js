function displayEmail(event) {
  event;
  document.querySelector("#email").innerHTML = " alexa.m.klein@gmail.com";
}

function hideEmail(event) {
  event;
  document.querySelector("#email").innerHTML = "";
}

function displayGithub(event) {
  event;
  document.querySelector("#github").innerHTML = " github.com/alexamklein";
}

function hideGithub(event) {
  event;
  document.querySelector("#github").innerHTML = "";
}

function displayLinkedin(event) {
  event;
  document.querySelector("#linkedin").innerHTML =
    " linkedin.com/in/alexa-m-klein";
}

function hideLinkedin(event) {
  event;
  document.querySelector("#linkedin").innerHTML = "";
}

function displayInstagram(event) {
  event;
  document.querySelector("#instagram").innerHTML = " @alexamklein";
}

function hideInstagram(event) {
  event;
  document.querySelector("#instagram").innerHTML = "";
}

function displayTwitter(event) {
  event;
  document.querySelector("#twitter").innerHTML = " @alexamklein";
}

function hideTwitter(event) {
  event;
  document.querySelector("#twitter").innerHTML = "";
}

function displayCodepen(event) {
  event;
  document.querySelector("#codepen").innerHTML = " @alexamklein";
}

function hideCodepen(event) {
  event;
  document.querySelector("#codepen").innerHTML = "";
}

function playAnim() {
  setTimeout(
    function () {
      typeText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(0, index);
      if (isAdding) {
        if (index > textToBeTypedArr[textToBeTypedIndex].length) {
          isAdding = false;
          typeText.classList.add("showAnim");
          setTimeout(function () {
            typeText.classList.remove("showAnim");
            playAnim();
          }, 2000);
          return;
        } else {
          index++;
        }
      } else {
        if (index === 0) {
          isAdding = true;
          textToBeTypedIndex =
            (textToBeTypedIndex + 1) % textToBeTypedArr.length;
        } else {
          index--;
        }
      }
      playAnim();
    },
    isAdding ? 120 : 60
  );
}

let emailLink = document.querySelector("#email-icon");
emailLink.addEventListener("mouseover", displayEmail);
emailLink.addEventListener("mouseout", hideEmail);

let githubLink = document.querySelector("#github-icon");
githubLink.addEventListener("mouseover", displayGithub);
githubLink.addEventListener("mouseout", hideGithub);

let linkedinLink = document.querySelector("#linkedin-icon");
linkedinLink.addEventListener("mouseover", displayLinkedin);
linkedinLink.addEventListener("mouseout", hideLinkedin);

let instagramLink = document.querySelector("#instagram-icon");
instagramLink.addEventListener("mouseover", displayInstagram);
instagramLink.addEventListener("mouseout", hideInstagram);

let twitterLink = document.querySelector("#twitter-icon");
twitterLink.addEventListener("mouseover", displayTwitter);
twitterLink.addEventListener("mouseout", hideTwitter);

let codepenLink = document.querySelector("#codepen-icon");
codepenLink.addEventListener("mouseover", displayCodepen);
codepenLink.addEventListener("mouseout", hideCodepen);

let typeText = document.querySelector(".typeText");
let textToBeTyped = "front-end developer.";
let textToBeTypedArr = [
  "front-end developer.",
  "jurist.",
  "life-long learner.",
];

let index = 0,
  isAdding = true,
  textToBeTypedIndex = 0;

playAnim();
