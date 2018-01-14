var cloud = document.querySelector("footer span#cloud"),
	star = document.querySelector("footer span#star"),
	flag = document.querySelector("footer span#flag"),
	peace = document.querySelector("footer span#peace"),
	smiley = document.querySelector("footer span#smiley");

star.addEventListener("click", () => {
	Array.from(document.getElementsByTagName("a")).forEach(el => {
		if (Array.from(el.classList).indexOf("tomato")) {
			el.classList.remove("tomato");
		} else {
			el.classList.add("tomato");
		}
	});
});
