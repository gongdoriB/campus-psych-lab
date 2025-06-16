const score = { A: 0, B: 0, C: 0, D: 0 };
let currentQuestion = 0;

const questions = [
    {
        question: "Q1. 시험 전날 밤, 당신은?",
        options: {
            A: "계획대로 복습 중",
            B: "아직 멘붕 상태",
            C: "친구 요약본 뒤적이는 중",
            D: "찍을 포인트만 찾는 중"
        }
    },
    {
        question: "Q2. 시험 당일 아침, 당신은?",
        options: {
            A: "정리된 노트로 최종 점검",
            B: "아무 생각 없다",
            C: "요약본 복습 중",
            D: "감으로 승부 본다"
        }
    },
    {
        question: "Q3. 공부 시작 전에 먼저 하는 행동은?",
        options: {
            A: "계획표 다시 정리함",
            B: "불안해서 유튜브 본다",
            C: "요약 공유 파일 찾는다",
            D: "연습문제 찍기 연습부터 시작"
        }
    },
    {
        question: "Q4. 친구가 공부 진도 물어볼 때 나는?",
        options: {
            A: "예상 질문까지 분석함",
            B: "“아직 손도 못 댐…”",
            C: "요약집 공유 받음",
            D: "“찍을 거 공유 ㄱㄱ”"
        }
    },
    {
        question: "Q5. 공부하다가 막혔을 때 반응은?",
        options: {
            A: "일단 핵심만 다시 정리",
            B: "멘붕 오고 손 놈",
            C: "검색+요약으로 커버",
            D: "여긴 안 나오겠지 하고 넘김"
        }
    },
    {
        question: "Q6. 모르는 문제가 나왔을 때 나는?",
        options: {
            A: "논리적으로 접근",
            B: "손 던지고 넘김",
            C: "비슷한 문제 기억하며 풀기 시도",
            D: "감으로 가장 길어 보이는 걸 찍음"
        }
    },
    {
        question: "Q7. 공부 장소는?",
        options: {
            A: "조용한 개인 공간",
            B: "집안 여기저기 떠돌기",
            C: "도서관이나 친구 방",
            D: "카페 or 아무 데나"
        }
    },
    {
        question: "Q8. 벼락치기 중 가장 중요한 건?",
        options: {
            A: "시간 분배",
            B: "정신력",
            C: "요약자료",
            D: "찍기 스킬"
        }
    },
    {
        question: "Q9. 시험 끝나고의 내 한마디?",
        options: {
            A: "노력한 만큼 나왔다",
            B: "망한 듯",
            C: "요약만 봤는데 괜찮았음",
            D: "감이 좋아서 나쁘지 않았음"
        }
    },
    {
        question: "Q10. 다음 시험은 어떻게 할 예정?",
        options: {
            A: "이번보다 미리미리",
            B: "그때 가봐야 알 듯",
            C: "자료 정리부터 해둠",
            D: "어차피 벼락치기"
        }
    }
];

function showQuestion() {
    const q = questions[currentQuestion];
    document.getElementById("question").innerText = q.question;
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
    let resultText = "";
    if (highest === "A") resultText = "🧠 계획적 분할러 – 완벽 준비형! 시간과 계획을 무기로 시험을 제압합니다.";
    else if (highest === "B") resultText = "😵 혼돈의 본능러 – 멘붕 속에서도 어떻게든 헤쳐나가는 스타일!";
    else if (highest === "C") resultText = "📄 요약 사냥꾼 – 자료 수집과 요약에 능한 전략가!";
    else resultText = "🎯 직관적 선별러 – 감과 촉으로 승부하는 실전파!";
    document.getElementById("quiz-box").innerHTML = `
    <h2>당신의 유형은?</h2>
    <p id='result'>${resultText}</p>
    <div class="mt-4 text-center">
        <a href="test.html" class="btn btn-outline-primary me-2">다른 테스트 하러 가기</a>
        <a href="../guide/test_cramming_guide.html" class="btn btn-primary">유형별 해설 보기</a>
    </div>
`;
}

document.addEventListener("DOMContentLoaded", showQuestion);
