const delayTest = window.CAMPUS_PSYCH_TESTS.delay;
const questions = delayTest.questions;

const score = { A: 0, B: 0, C: 0, D: 0 };
let currentQuestion = 0;

function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.text;
    document.getElementById("btnA").innerText = "A. " + q.options.A;
    document.getElementById("btnB").innerText = "B. " + q.options.B;
    document.getElementById("btnC").innerText = "C. " + q.options.C;
    document.getElementById("btnD").innerText = "D. " + q.options.D;
}

function selectAnswer(type) {
    score[type]++;
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    const highest = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);
    const resultText = delayTest.results[highest].text;

    document.getElementById("quiz-box").innerHTML = `
    <h2>당신의 유형은?</h2>
    <p id='result'>${resultText}</p>
    <div class="mt-4 text-center">
        <a href="${delayTest.listUrl}" class="btn btn-outline-primary me-2">다른 테스트 하러 가기</a>
        <a href="${delayTest.guideUrl}" class="btn btn-primary">유형별 해설 보기</a>
    </div>
`;
}

document.addEventListener("DOMContentLoaded", showQuestion);
