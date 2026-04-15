window.addEventListener("load", function () {
    const music = document.getElementById("bgMusic");

    music.volume = 0; // start silent

    // try to play (browser may require interaction)
    let playPromise = music.play();

    if (playPromise !== undefined) {
        playPromise.then(() => {
            let volume = 0;

            let fade = setInterval(() => {
                if (volume < 1) {
                    volume += 0.02; // fade speed
                    music.volume = volume;
                } else {
                    clearInterval(fade);
                }
            }, 100);
        }).catch(() => {
            console.log("Autoplay blocked — will start on interaction");
        });
    }
});

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

document.addEventListener("mousemove", function(e) {
    let sparkle = document.createElement("div");
    sparkle.innerHTML = "✨";
    sparkle.className = "sparkle";
    document.body.appendChild(sparkle);

    sparkle.style.left = e.pageX + "px";
    sparkle.style.top = e.pageY + "px";

    setTimeout(() => {
        sparkle.remove();
    }, 800);
});

function openLetter() {
    document.getElementById("loveLetter").style.display = "block";
}

function closeLetter() {
    document.getElementById("loveLetter").style.display = "none";
}