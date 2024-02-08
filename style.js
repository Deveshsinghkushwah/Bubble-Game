let time = 31;
let score = 0;
let hitnum = 0;
function bubblenumbergenerator() {
    let clutter = "";
    for (let i = 1; i <= 144; i++) {
        let a = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${a}</div>`;
    }

    let pbtm = document.querySelector("#panelbottom");
    pbtm.innerHTML = clutter;
};

function hitnumbergenerator() {
    hitnum = Math.floor(Math.random() * 10);
    let hitt = document.querySelector('#hit');
    hitt.innerText = hitnum;
}

function runtimer() {
    var timer = setInterval(function () {
        if (time > 0) {
            time--;
            document.querySelector('#timer').innerText = time;
        } else {
            clearInterval(timer);
            document.querySelector('#panelbottom').innerHTML = `<h2>Game Over!!</h2>`;
        }
    }, 1000)
}
function increasescore() {
    score += 10;
    document.querySelector('#score').innerText = score;
}

hitnumbergenerator();
bubblenumbergenerator();
runtimer();

document.querySelector('#panelbottom').addEventListener('click', function (dets) {
    var clickednumber = Number(dets.target.textContent);
    if (clickednumber === hitnum) {
        increasescore();
        hitnumbergenerator();
        bubblenumbergenerator();
    }
})