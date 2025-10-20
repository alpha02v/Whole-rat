let index = 0;
const container = document.getElementById("swipe-container");
const sections = document.querySelectorAll(".section");

function goTo(i) {
  index = Math.max(0, Math.min(sections.length - 1, i));
  container.style.transform = `translateX(${-index * 100}%)`;
}

let startX = null;
container.addEventListener("touchstart", (e) => startX = e.touches[0].clientX, { passive: true });
container.addEventListener("touchend", (e) => {
  const dx = e.changedTouches[0].clientX - startX;
  if (dx > 60) goTo(index - 1);
  else if (dx < -60) goTo(index + 1);
});

// Flirty lines
const flirts = [
  "Are you a magician? Because whenever I look at you, everyone else disappears 😘",
  "You're my favorite notification 💌",
  "Do you have a map? I keep getting lost in your eyes 💖",
  "You're like Wi-Fi... I’m totally connected to you 💫",
  "You must be tired, because you’ve been running through my mind all day 💕"
];

let flirtIndex = 0;
document.getElementById("next-flirt").onclick = () => {
  flirtIndex = (flirtIndex + 1) % flirts.length;
  document.getElementById("flirt-line").textContent = flirts[flirtIndex];
};

// Love button loop
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modal-text");
const modalEmoji = document.getElementById("modal-emoji");
const modalYes = document.getElementById("modal-yes");
const modalNo = document.getElementById("modal-no");

const noMessages = [
  "Are you sure? 😢",
  "Please think again 🥺",
  "One more time pretty please 💖",
  "You can’t say no forever 😜",
  "Say yes, my love 💞"
];

let noCount = 0;

noBtn.onclick = () => showModal();
modalNo.onclick = () => {
  noCount++;
  modalEmoji.textContent = ["🥺","😅","🙃","🤭","🤗"][noCount % 5];
  modalText.textContent = noMessages[noCount % noMessages.length];
};
modalYes.onclick = () => { hideModal(); triggerYes(); };
yesBtn.onclick = () => triggerYes();

function showModal() {
  modal.classList.remove("hidden");
}

function hideModal() {
  modal.classList.add("hidden");
}

function triggerYes() {
  hideModal();
  heartsFall(40);
  alert("Yay! She said YES ❤️");
}

// Falling hearts animation
function heartsFall(count = 30) {
  const hearts = document.getElementById("hearts");
  for (let i = 0; i < count; i++) {
    const h = document.createElement("div");
    h.className = "heart";
    h.textContent = ["💖", "💕", "❤️", "💘"][Math.floor(Math.random() * 4)];
    h.style.left = Math.random() * 100 + "%";
    h.style.fontSize = 20 + Math.random() * 40 + "px";
    h.style.animationDuration = 3000 + Math.random() * 3000 + "ms";
    hearts.appendChild(h);
    setTimeout(() => h.remove(), 7000);
  }
                          }
