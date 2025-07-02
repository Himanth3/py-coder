document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("themeToggle");
    const themeIcon = document.getElementById("themeIcon");
    const body = document.body;

    function updateIcon() {
        if (body.classList.contains("dark-mode")) {
            themeIcon.textContent = "🌑 Dark";
        } else {
            themeIcon.textContent = "🌞 Ligth";
        }
    }

    // Load theme from localStorage
    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-mode");
    }

    updateIcon();

    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
        updateIcon();
    });
});


document.getElementById("quizForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const answers = {
        q1: "7",
        q2: "if",
        q3: "[0, 1, 2, 3, 4]",
        q4: "def myFunc():",
        q5: "[1, 2, 3]"
    };

    let score = 0;
    let total = Object.keys(answers).length;

    for (let q in answers) {
        const selected = document.querySelector(`input[name="${q}"]:checked`);
        if (selected && selected.value === answers[q]) {
            score++;
        }
    }

    const resultDiv = document.getElementById("result");
    const scoreCard = document.getElementById("scoreCard");
    const betterLuck = document.getElementById("betterLuck");

    resultDiv.textContent = `You scored ${score} out of ${total}`;

    if (score === total) {
        scoreCard.style.display = "block";
        betterLuck.style.display = "none";
    } else {
        scoreCard.style.display = "none";
        betterLuck.style.display = "block";
    }
});
