const factTag = document.querySelector("h1");
const authorTag = document.querySelector("p");
const randomTag = document.querySelector("footer img");
const bodyTag = document.querySelector("body");

const getFacts = function () {
  fetch("https://meowfacts.herokuapp.com/")
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      factTag.innerHTML = "&ldquo;" + jsonData.data + "&rdquo;";

      if (jsonData.data.length > 70) {
        factTag.classList.add("long");
      } else {
        factTag.classList.remove("long");
      }

      bodyTag.style.backgroundColor = `hsl(${Math.random() * 360},100%,90%)`;
    });
};

// run getFacts on click of random iamge
randomTag.addEventListener("click", function () {
  getFacts();
});

randomTag.addEventListener("load", function () {
  getFacts();
});
