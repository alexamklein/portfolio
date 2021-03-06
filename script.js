// Display sidebar social media URLs on hover
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

//Typewrite hero headline (start 4s after load)
function typeHeadline() {
  setTimeout(
    function () {
      typedText.innerText = textToBeTypedArr[textToBeTypedIndex].slice(
        0,
        index
      );
      if (isAdding) {
        if (index > textToBeTypedArr[textToBeTypedIndex].length) {
          isAdding = false;
          typedText.classList.add("showAnim");
          setTimeout(function () {
            typedText.classList.remove("showAnim");
            typeHeadline();
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
      typeHeadline();
    },
    isAdding ? 120 : 60
  );
}

let typedText = document.querySelector(".typed-text");
let textToBeTyped = "front-end developer.";
let textToBeTypedArr = [
  "front-end developer.",
  "jurist.",
  "life-long learner.",
];

let index = 0,
  isAdding = true,
  textToBeTypedIndex = 0;

function timeFunction() {
  setTimeout(function () {
    typeHeadline();
  }, 4000);
}

timeFunction();

// Fade in content sections on scroll

function reveal() {
  let reveal = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveal.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveal[i].getBoundingClientRect().top;
    let elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveal[i].classList.add("active");
    } else {
      reveal[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

// Display local hour in contact section
function formatLocalDayHour(time) {
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let day = days[time.getDay()];
  let hours = [
    12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11,
  ];
  let hour = hours[time.getHours()];
  return ` ${day} ${hour}`;
}

function formatLocalMinuteAmPm(time) {
  let minute = time.getMinutes();
  if (minute < 10) {
    minute = `0${minute}`;
  }
  let militaryTime = time.getHours();
  if (militaryTime < 12) {
    amPm = "AM";
  } else {
    amPm = "PM";
  }
  return `${minute} ${amPm} `;
}

function displayLocalTime(response) {
  let userTime = new Date();
  let utcOffset = userTime.getTimezoneOffset() * 60000;
  let utcTimestamp = userTime.getTime() + utcOffset;
  let localTimestamp = utcTimestamp + response.data.timezone * 1000;
  let localTime = new Date(localTimestamp);
  document.querySelector("#local-hour").innerHTML =
    formatLocalDayHour(localTime);
  document.querySelector("#local-minute").innerHTML =
    formatLocalMinuteAmPm(localTime);
}

function displayLocalTimezone(response) {
  let localTimezone = response.data.timezone / 3600;
  document.querySelector("#timezone-offset").innerHTML = localTimezone;
}

function getLocalTimezone() {
  let apiEndpoint = "https://api.openweathermap.org/data/2.5/weather";
  let apiKey = "6f7fc1e8921ca5e8743c4596d4b381f9";
  let apiUrl = `${apiEndpoint}?q=Toronto&appid=${apiKey}`;
  axios.get(`${apiUrl}`).then(displayLocalTime);
  axios.get(`${apiUrl}`).then(displayLocalTimezone);
}

getLocalTimezone();
setInterval(getLocalTimezone, 1000);
