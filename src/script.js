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
