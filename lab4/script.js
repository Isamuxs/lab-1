const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");
const startBtn = document.getElementById("startBtn");
const difficultySelect = document.getElementById("difficulty");

let score = 0;
let timer;
let countdownInterval;
let difficulty = 'easy';
let timeLeft = 0;

const difficultySettings = {
    easy: { time: 3000, fakeChance: 0.1 },
    medium: { time: 2000, fakeChance: 0.3 },
    hard: { time: 1000, fakeChance: 0.5 }
};


const timerDisplay = document.createElement("p");
timerDisplay.textContent = "Час: 0.0 с";
document.body.insertBefore(timerDisplay, gameArea);

startBtn.addEventListener("click", () => {
    score = 0;
    scoreDisplay.textContent = score;
    difficulty = difficultySelect.value;
    nextPixel();
});

function nextPixel() {
    clearTimeout(timer);
    clearInterval(countdownInterval);
    gameArea.innerHTML = "";


    const targetPixel = document.createElement("div");
    targetPixel.classList.add("pixel", "target");
    positionPixel(targetPixel);
    gameArea.appendChild(targetPixel);

    targetPixel.addEventListener("click", () => {
        score++;
        scoreDisplay.textContent = score;
        nextPixel();
    });


    if (Math.random() < difficultySettings[difficulty].fakeChance) {
        const fakePixel = document.createElement("div");
        fakePixel.classList.add("pixel", "fake");
        positionPixel(fakePixel);
        gameArea.appendChild(fakePixel);
        fakePixel.addEventListener("click", () => {
            alert("Mission Failed We'll Get Em Next Time");
            gameArea.innerHTML = "";
            clearTimeout(timer);
            clearInterval(countdownInterval);
        });
    }

    timeLeft = difficultySettings[difficulty].time / 1000;
    timerDisplay.textContent = `Час: ${timeLeft.toFixed(1)} с`;

    countdownInterval = setInterval(() => {
        timeLeft -= 0.1;
        if (timeLeft <= 0) timeLeft = 0;
        timerDisplay.textContent = `Час: ${timeLeft.toFixed(1)} с`;
    }, 100);

    timer = setTimeout(() => {
        alert("Your time is over");
        gameArea.innerHTML = "";
        clearInterval(countdownInterval);
    }, difficultySettings[difficulty].time);
}

function positionPixel(pixel) {
    const areaSize = 400;
    const pixelSize = 30;
    pixel.style.top = Math.floor(Math.random() * (areaSize - pixelSize)) + "px";
    pixel.style.left = Math.floor(Math.random() * (areaSize - pixelSize)) + "px";
}
