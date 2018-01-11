var cloud = document.querySelector("footer span#cloud"),
    star = document.querySelector("footer span#star"),
    flag = document.querySelector("footer span#flag"),
    peace = document.querySelector("footer span#peace"),
    smiley = document.querySelector("footer span#smiley");

star.addEventListener("click", () => {
  Array.from(document.getElementsByTagName("a")).forEach( (e) => {
    e.className += " tomato";
  });
});
