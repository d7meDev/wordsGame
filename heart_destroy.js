const hearts = Array.from(document.querySelectorAll(".header .hearts img"));
function destroyHeart() {
  const lastHeart = hearts.pop();
  lastHeart.style.visibility = "hidden";
}

export {destroyHeart};