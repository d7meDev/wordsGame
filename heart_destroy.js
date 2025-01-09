const hearts = Array.from(document.querySelectorAll(".header .hearts img"));
function destroyHeart() {
  const lastHeart = hearts[hearts.length - 1];
  hearts.pop()
  lastHeart.remove();
}

export {destroyHeart};