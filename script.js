/* =========================
   MUSIC
========================= */

const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");

let playing = false;

musicBtn.addEventListener("click", () => {

    if (!playing) {

        music.play();

        musicBtn.innerHTML = "⏸ PAUSE MUSIC";

        playing = true;

    } else {

        music.pause();

        musicBtn.innerHTML = "🎵 PLAY MUSIC";

        playing = false;

    }

});


/* =========================
   FALLING MONEY / GOLD / DIAMONDS
========================= */

const container = document.getElementById("money-container");

const objects = [
    "💵",
    "💵",
    "💵",
    "🪙",
    "🪙",
    "💎"
];

function createMoney() {

    const item = document.createElement("div");

    item.classList.add("money");

    item.innerHTML =
        objects[Math.floor(Math.random() * objects.length)];

    item.style.left =
        Math.random() * 100 + "vw";

    item.style.fontSize =
        (18 + Math.random() * 25) + "px";

    item.style.animationDuration =
        (5 + Math.random() * 7) + "s";

    container.appendChild(item);

    setTimeout(() => {
        item.remove();
    }, 13000);
}


/* Create falling objects */

setInterval(createMoney, 450);


/* =========================
   MOUSE EFFECT
========================= */

document.addEventListener("mousemove", (e) => {

    document.body.style.setProperty(
        "--mouse-x",
        e.clientX + "px"
    );

    document.body.style.setProperty(
        "--mouse-y",
        e.clientY + "px"
    );

});
