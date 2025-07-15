// JavaScript source code
function calculatePower() {
	let base = Number(document.getElementById('base').value);
	let exponent = Number(document.getElementById('exponent').value);
	document.getElementById('power').value = Power(base, exponent);
}
function Power(base, exponent) {
	return base ** exponent;
}
function SwitchBackground() {
	let switchButton = document.getElementById('switchBackground');
	let delay = Number(document.getElementById("delay").value);
	console.log(delay);
	document.body.style.transition = `background-color ${delay}s, color ${delay}s`;
	document.getElementById('switchBackground').style.transition = `background-image ${delay}s`;
	document.body.className = document.body.className === "light" ? "dark" : "light";
}