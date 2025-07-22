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
document.addEventListener("mousemove", function (event) {
	let x = event.clientX;
	let y = event.clientY;
	document.getElementById("mouse").innerHTML = `X = ${x}, Y = ${y}`;
}
);

function setImage() {
	let filename = document.getElementById("image-file");
	let reader = new FileReader();
	reader.onload = function (e) {
		document.getElementById("photo").src = e.target.result;
	}
	reader.readAsDataURL(filename.files[0]);
}

document.body.onload = function tick_timer() {
	let time = new Date();
	document.getElementById("full-time").innerHTML = time;
	document.getElementById("hours").innerHTML = addLeadingZero(time.getHours());
	document.getElementById("minutes").innerHTML = addLeadingZero(time.getMinutes());
	document.getElementById("seconds").innerHTML = addLeadingZero(time.getSeconds());

	document.getElementById("year").innerHTML = time.getFullYear();
	document.getElementById("month").innerHTML = addLeadingZero(time.getMonth() + 1);
	document.getElementById("day").innerHTML = addLeadingZero(time.getDate());

	document.getElementById("weekday").innerHTML = time.toLocaleDateString("ru", { weekday: 'long' });

	document.getElementById("current-date").style.visibility = document.getElementById("show-date").checked ? "visible" : "hidden";
	document.getElementById("weekday").style.visibility = document.getElementById("show-weekday").checked ? "visible" : "hidden";

	setTimeout(tick_timer, 100);
}
function addLeadingZero(number) {
	return number < 10 ? "0" + number : number;
}

document.getElementById("btn-start").onclick = function startCountdownTimer() {
	let targetDate = document.getElementById("target-date");
	let targetTime = document.getElementById("target-time");
	let btnStart = document.getElementById("btn-start");
	targetDate.disabled = targetTime.disabled = !targetDate.disabled;
	if (btnStart.value === "Start") {
		btnStart.value = "Stop";
		tickCountdown();
	}
	else {
		btnStart.value = "Start";
	}
}
function tickCountdown() {
	if (!document.getElementById("target-time").disabled) return;
	let now = new Date();
	console.log(`now timezoneOffset:\t${now.getTimezoneOffset()}`);

	let targetDateControl = document.getElementById("target-date");
	let targetTimeControl = document.getElementById("target-time");
	let targetDate = targetDateControl.valueAsDate;
	let targetTime = targetTimeControl.valueAsDate;

	targetDate.setHours(targetDate.getHours() + targetDate.getTimezoneOffset() / 60);
	targetTime.setHours(targetTime.getHours() + targetTime.getTimezoneOffset() / 60);

	targetTime.setFullYear(targetDate.getFullYear());
	targetTime.setMonth(targetDate.getMonth());
	targetTime.setDate(targetDate.getDate());

	let duration = targetTime - now;
	document.getElementById("duration").innerHTML = duration;
	let timestamp = Math.trunc(duration / 1000);
	document.getElementById("timestamp").innerHTML = timestamp;

	document.getElementById("target-date-value").innerHTML = targetDate;
	document.getElementById("target-time-value").innerHTML = targetTime;

	console.log(`targetTime timezoneOffset:\t${now.getTimezoneOffset()}`);

	setTimeout(tickCountdown, 100);
}