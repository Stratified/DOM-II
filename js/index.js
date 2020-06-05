const headerImg = document.querySelector("img");
headerImg.addEventListener("mousedown", () => {
  headerImg.style.transform = "scale(1.2)";
});

headerImg.addEventListener("mouseup", () => {
  headerImg.style.transform = "scale(1)";
});

const body = document.querySelector("body");
body.addEventListener("keydown", () => {
  body.style.color = "orange";
});
