const plus = document.querySelectorAll("span");
const answers = document.querySelectorAll(".answer");

answers.forEach((answer, idx) => {
    answer.classList.add(`answer${idx}`);
});



plus.forEach((btn, idx) => {
    btn.addEventListener("click", () => {
        const answer = document.querySelector(`.answer${idx}`);
        if(answer.classList.contains("active")) {
            answer.classList.remove("active");
            btn.innerHTML = "+";
        } else {
            answer.classList.add("active");
            btn.innerHTML = "-";
        }
    })
});