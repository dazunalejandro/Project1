
messages = [
    "You will enjoy good health.",
    "If your desires are not extravagant they will be granted.",
    "You are the master of every situation.",
    "Wise men learn more from fools than fools learn from the wise.",
    "Your dearest wish will come true.",
    "Hearty laughter is a good way to jog internally without having to go outdoors.",
    "You will always have good luck in your personal life.",
    "Birds are entangled by their feet and men by their tongues.",
    "You are vigorous in words and action.",
    "Drink to your health.",
    "Ambition knows no obstacles."
]



button.addEventListener("click", function() {
    let button = document.getElementById("button1");
    let index = Math.floor(Math.random() * messages.length);
    output.innerHTML = messages[index];
});