function getCampusPsychTest(testId) {
    const tests = window.CAMPUS_PSYCH_TESTS || {};
    return tests[testId];
}

function createTestRunner(testData) {
    const questions = testData.questions;
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
        const resultText = testData.results[highest].text;

        document.getElementById("quiz-box").innerHTML = `
    <h2>당신의 유형은?</h2>
    <p id='result'>${resultText}</p>
    <div class="mt-4 text-center">
        <a href="${testData.listUrl}" class="btn btn-outline-primary me-2">다른 테스트 하러 가기</a>
        <a href="${testData.guideUrl}" class="btn btn-primary">유형별 해설 보기</a>
    </div>
`;
    }

    return {
        showQuestion,
        selectAnswer,
        showResult
    };
}

function initCampusPsychTest(testId) {
    const testData = getCampusPsychTest(testId);

    if (!testData) {
        console.error(`테스트 데이터를 찾을 수 없습니다: ${testId}`);
        return;
    }

    const runner = createTestRunner(testData);

    window.showQuestion = runner.showQuestion;
    window.selectAnswer = runner.selectAnswer;
    window.showResult = runner.showResult;

    document.addEventListener("DOMContentLoaded", runner.showQuestion);
}

if (typeof window !== "undefined") {
    window.getCampusPsychTest = getCampusPsychTest;
    window.createTestRunner = createTestRunner;
    window.initCampusPsychTest = initCampusPsychTest;
}
