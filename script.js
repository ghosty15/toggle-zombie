function zombieMode() {
	const button = document.getElementById("z-button");
	const container = document.getElementById("container");

	button.setAttribute(
		"aria-pressed",
		button.getAttribute("aria-pressed") === "true" ? "false" : "true"
	);
	container.classList.toggle("z-toggled");
}