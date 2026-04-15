function showSurprise() {
    document.getElementById("hiddenMessage").style.display = "block";
}

function showMessage(index) {
    var messages = [
        "You are the most beautiful person I know 💖",
        "You make everything feel better just by being around you 🤎",
        "I am blessed to have you in my life 💕"
    ];

    document.getElementById("clickMessage").innerText = messages[index];
}

function spawnHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");

    const hearts = ["💖", "💕", "🤎", "💗"];
    heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "100vh";

    document.getElementById("heart-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// continuously spawn hearts
setInterval(spawnHeart, 400);