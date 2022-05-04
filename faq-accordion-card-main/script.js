"use strict";

const allQuestions = document.querySelectorAll(".mainItem");
const questionBlock = document.querySelectorAll("mainList");

allQuestions.forEach(function(mainItem){
    mainItem.addEventListener("click", function () {
        const answerOutput = mainItem.querySelector(".answer");
        const question = mainItem.querySelector(".question");
        const arrow = mainItem.querySelector(".arrow");

        answerOutput.classList.toggle("shown");
        question.classList.toggle("active");
        arrow.classList.toggle("rotate");
    });
});