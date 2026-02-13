document.addEventListener("DOMContentLoaded", function () {

  const container = document.querySelector(".container");
  const card = document.querySelector(".card");

  container.addEventListener("mouseenter", function () {
    card.style.transition = "top 0.6s";
    card.style.top = "-90px";
  });

  container.addEventListener("mouseleave", function () {
    card.style.transition = "top 0.6s";
    card.style.top = "0px";
  });

});

const yesBtn = document.getElementById("yesBtn");
const audio = document.getElementById("loveAudio");
const videoSection = document.getElementById("videoSection");
const video = document.getElementById("loveVideo");

yesBtn.addEventListener("click", () => {
    // Show the video section
    videoSection.style.display = "block";

    // Speed up audio
    audio.playbackRate = 1.5;

    // Play audio + video
    audio.play();
    video.play();

    // Scroll smoothly to video
    videoSection.scrollIntoView({ behavior: "smooth" });
});


const noBtn = document.getElementById("noBtn");
const area = document.querySelector(".buttons");

area.addEventListener("mousemove", (e) => {
    const btnRect = noBtn.getBoundingClientRect();
    const areaRect = area.getBoundingClientRect();

    const distanceX = e.clientX - (btnRect.left + btnRect.width / 2);
    const distanceY = e.clientY - (btnRect.top + btnRect.height / 2);

    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

    // Run away when mouse gets close
    if (distance < 120) {
        moveButton();
    }
});

// ALSO escape if clicked
noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveButton();
});

function moveButton() {
    const areaRect = area.getBoundingClientRect();

    const maxX = areaRect.width - noBtn.offsetWidth;
    const maxY = areaRect.height - noBtn.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.position = "absolute";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}
