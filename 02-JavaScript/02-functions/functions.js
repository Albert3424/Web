// JavaScript source code
function calculatePower()
{
	let base = Number(document.getElementById('base').value);
	let exponent = Number(document.getElementById('exponent').value);
	document.getElementById('power').value = Power(base, exponent);
}
function Power(base, exponent)
{
	return base ** exponent;
}
function SwitchBackground()
{
	let switchButton = document.getElementById('switchBackground');
	let delay = Number(document.getElementById("delay").value);
	console.log(delay);
	document.body.style.transition = `background-color ${delay}s, color ${delay}s`;
	document.getElementById('switchBackground').style.transition = `background-image ${delay}s`;
	document.body.className = document.body.className === "light" ? "dark" : "light";
}
document.addEventListener("mousemove", function (event)
{
	let x = event.clientX;
	let y = event.clientY;
	document.getElementById("mouse").innerHTML = `X = ${x}, Y = ${y}`;
}
);

function setImage()
{
	let filename = document.getElementById("image-file");
	let reader = new FileReader();
	reader.onload = function (e) {
		document.getElementById("photo").src = e.target.result;
	}
	reader.readAsDataURL(filename.files[0]);
}

document.body.onload = function tick_timer()
{
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
function addLeadingZero(number)
{
	return number < 10 ? "0" + number : number;
}

let countdownInterval;

function startCountdown()
{
	const targetDateInput = document.getElementById("targetDate");
	const targetDateValue = targetDateInput.value;

	if (!targetDateValue)
	{
		alert("Please select a target date and time");
		return;
	}

	const targetDate = new Date(targetDateValue).getTime();
	console.log("targetDateValue:", targetDateValue);
	console.log("targetDate:", targetDate);
	clearInterval(countdownInterval);

	countdownInterval = setInterval(function ()
	{
		const now = new Date().getTime();
		const timeLeft = targetDate - now;

		if (timeLeft <= 0)
		{
			clearInterval(countdownInterval);
			document.getElementById("countdown").innerHTML = "Countdown Finished!";
			return;
		}
		
		const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
		const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
		const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

		document.getElementById("countdown").innerHTML =
			"Time remaining until the set date: " + days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

	}, 1000);
}