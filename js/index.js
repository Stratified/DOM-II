const title = document.querySelector(".logo-heading");
title.addEventListener("click", () => {
  title.style.color = "green";
});

const navBar = document.querySelectorAll("a");
navBar.forEach((nav) => {
  nav.addEventListener("click", (e) => {
    e.target.style.color = "purple";
    e.preventDefault();
  });
});

const imgs = document.querySelectorAll("img");
imgs.forEach((img) => {
  img.addEventListener("mousedown", (e) => {
    e.target.style.transform = "scale(1.2)";
  });
});
imgs.forEach((img) => {
  img.addEventListener("mouseup", (e) => {
    e.target.style.transform = "scale(1)";
  });
});

imgs.forEach((img) => {
  img.addEventListener("mouseenter", (e) => {
    e.target.style.transform = "scale(1.1)";
  });
});
imgs.forEach((img) => {
  img.addEventListener("mouseleave", (e) => {
    e.target.style.transform = "scale(1)";
  });
});

const body = document.querySelector("body");
body.addEventListener("click", (e) => {
  body.style.backgroundColor = "teal";
});
body.addEventListener("keydown", (e) => {
  body.style.color = "orange";
});
body.addEventListener("keydown", (e) => {
  if (e.key === "f") {
    body.style.color = "red";
  }
});

const para = document.querySelectorAll("p");
para.forEach((p) => {
  p.addEventListener("mouseover", (e) => {
    e.target.style.color = "purple";
  });
  p.addEventListener("mouseleave", (e) => {
    e.target.style.color = "black";
  });
});

const button = document.querySelectorAll(".btn");
button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.target.style.fontSize = "3rem";
    e.target.style.transition = "ease-in-out 1s";
    e.stopPropagation();
  });
});

const h2 = document.querySelectorAll("h2");
h2.forEach((h) => {
  h.addEventListener("click", (e) => {
    e.target.style.color = "red";
  });
});
h2.addEventListener("dblclick", () => {
  h2.style.color = "blue";
});
