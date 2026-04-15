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