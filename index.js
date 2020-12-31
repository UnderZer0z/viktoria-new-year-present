const body = document.body;
const endTime = new Date('December 31 2020 23:59:59');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');


setInterval(updateCountdown, 1000)
setInterval(timeup, 5000)

function updateCountdown() {
	const startTime = new Date();
	const diff = endTime - startTime;
	const hours = Math.floor(diff / 1000 / 60 / 60) % 24;
	const minutes = Math.floor(diff / 1000 / 60) % 60;
	const seconds = Math.floor(diff / 1000) % 60;
	hoursEl.innerHTML = hours < 10 ? '0'+hours : hours;
	minutesEl.innerHTML = minutes < 10 ? '0'+minutes : minutes;
	secondsEl.innerHTML = seconds < 10 ? '0'+seconds : seconds;
}

function timeup(){
    var d = new Date();
    var n = d.getFullYear();
    if(n = 2021){
        document.querySelector('.countdown-container').style.visibility = "hidden";
        document.querySelector('.cophav').style.visibility = "visible";
    }
}
