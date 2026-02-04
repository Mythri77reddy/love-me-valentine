const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const questionContainer = document.getElementById("questionContainer");
const resultContainer = document.getElementById("resultContainer");

// NO button runs away 😜
noBtn.addEventListener("mouseover", () => {
    const containerWidth = questionContainer.offsetWidth;
    const containerHeight = questionContainer.offsetHeight;

    const btnWidth = noBtn.offsetWidth;
    const btnHeight = noBtn.offsetHeight;

    const newX = Math.random() * (containerWidth - btnWidth);
    const newY = Math.random() * (containerHeight - btnHeight);

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;
});

// YES button click ❤️
yesBtn.addEventListener("click", () => {
    questionContainer.style.display = "none";
    resultContainer.style.display = "block";
});
