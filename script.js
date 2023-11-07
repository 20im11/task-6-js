"use strict";

// task 1

let newDiv = document.createElement("div");
newDiv.classList.add("wrapper");
document.getElementById("for-task").appendChild(newDiv);
let newImg = document.createElement("img");
newImg.setAttribute(
  "src",
  "https://instructobit.com/static/img/post_defaults/javascript.jpg"
);
newImg.setAttribute("alt", "JS logo");
document.querySelector(".wrapper").appendChild(newImg);
let newH2 = document.createElement("h2");
newH2.classList.add("title");
newH2.innerText = "javaScript";
newH2.style.color = "red";
newH2.style.fontSize = "30px";
document.querySelector(".wrapper").appendChild(newH2);

// task 2

let newDivs = document.createElement("div");
let newDivs2 = document.createElement("div");
let newDivs3 = document.createElement("div");
newDivs.classList.add("sameDivs");
newDivs2.classList.add("sameDivs");
newDivs3.classList.add("sameDivs");
document.body.appendChild(newDivs);
document.body.appendChild(newDivs2);
document.body.appendChild(newDivs3);
let newP = document.createElement("p");
newP.classList.add("text");
newP.innerText = "hello";
document.querySelectorAll(".sameDivs").forEach((item) => {
  let newP = document.createElement("p");
  newP.classList.add("text");
  newP.innerText = "hello";
  item.appendChild(newP);
});

//  task 3

let burgerMenu = document.getElementById("bmenu");
let burgerNav = document.querySelector(".nav-list");
burgerMenu.addEventListener("click", function () {
  burgerNav.style.display = "flex";
  burgerNav.style.color = "blue";
  burgerNav.classList.toggle("new");
});
