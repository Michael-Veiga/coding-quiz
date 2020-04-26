var restartBtn = document.querySelector("button.restarBtn"),
    clearBtn = document.querySelector("button.clearBtn");
highScores = JSON.parse(localStorage.getItem("highScores") || "[]")
scoreList = document.getElementById("scores-list");

for (var s = 0; s < highScores.length; s++) {
    newLi.textContent = highScores[s].name + " - " + highScores[s].score

}

clearBtn.addEventListener("click", function () {
    localStorage.clear();

});
restartBtn.addEventListener("click", function () {

});