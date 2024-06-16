document.addEventListener("DOMContentLoaded", (e) => {
	const image = document.querySelector("#image");
	// const button = document.querySelector("#button");
	// button.addEventListener("click");

	image.addEventListener("click", function () {
		this.classList.toggle("zoomed");
	});
});
