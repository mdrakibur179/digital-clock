let hourEl = document.querySelector('.hour');
let minuteEl = document.querySelector('.minute');
let secEl = document.querySelector('.second');
let ampmEl = document.querySelector('.ampm');

function updateTime () {
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let ampm = 'AM';

    if(h > 12) {
        h = h - 12;
        ampm = "PM";
    }

    h < 10 ? h = `0${h}` : h;
    m < 10 ? m = `0${m}` : m;
    s < 10 ? s = `0${s}` : s;

    hourEl.innerText = h;
    minuteEl.innerText = m;
    secEl.innerText = s;
    ampmEl.innerText = ampm;

    setTimeout(() => {
        updateTime ();
    }, 1000);
}

updateTime();