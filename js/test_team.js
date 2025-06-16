const questions = [
    {
        "question": "Q1. 팀플 시작 전, 당신은?",
        "options": {
            "A": "미리 역할 분담을 정리해옴",
            "B": "자유롭게 정하자는 주의",
            "C": "일단 분위기 살핌",
            "D": "적극적인 사람에게 맡김"
        }
    },
    {
        "question": "Q2. 역할 분배 시 가장 먼저 떠오르는 생각은?",
        "options": {
            "A": "내가 잘하는 걸 맡자",
            "B": "다 같이 나눠서 하면 되지",
            "C": "갈등 없이 정해지면 좋겠다",
            "D": "되도록 편한 걸 맡고 싶다"
        }
    },
    {
        "question": "Q3. 팀원 중 미루는 사람이 생기면?",
        "options": {
            "A": "미리 연락해서 조율함",
            "B": "좀 기다려주자고 제안",
            "C": "눈치 보며 상황 파악",
            "D": "대신 해줄까 생각함"
        }
    },
    {
        "question": "Q4. 팀플에서 나는?",
        "options": {
            "A": "기획·정리 담당",
            "B": "아이디어 제안자",
            "C": "분위기 메이커",
            "D": "슬쩍 따라가는 조력자"
        }
    },
    {
        "question": "Q5. 팀 회의 중 갈등이 생기면?",
        "options": {
            "A": "중재하며 논리적으로 정리",
            "B": "다수 의견 따라감",
            "C": "화기애애하게 넘기려 함",
            "D": "그냥 조용히 있는 편"
        }
    },
    {
        "question": "Q6. 발표 전날 당신은?",
        "options": {
            "A": "전체 구성 점검 중",
            "B": "슬슬 발표 연습 시작",
            "C": "응원하며 분위기 띄움",
            "D": "조용히 발표 파트만 외움"
        }
    },
    {
        "question": "Q7. 내가 팀에서 제일 신경 쓰는 건?",
        "options": {
            "A": "결과물 완성도",
            "B": "팀워크와 협업",
            "C": "분위기와 감정",
            "D": "내 부담 최소화"
        }
    },
    {
        "question": "Q8. 팀플 종료 후 나는?",
        "options": {
            "A": "피드백과 반성 정리함",
            "B": "고생했다며 모두에게 연락",
            "C": "단톡방에서 후일담 나눔",
            "D": "조용히 나감"
        }
    },
    {
        "question": "Q9. 팀플에서 내가 꺼리는 상황은?",
        "options": {
            "A": "일정 밀리는 상황",
            "B": "역할 애매하게 겹치는 상황",
            "C": "불편한 분위기",
            "D": "내게 부담 쏠리는 상황"
        }
    },
    {
        "question": "Q10. 다음 팀플이 또 생긴다면?",
        "options": {
            "A": "이번보다 더 잘해보고 싶다",
            "B": "좋은 사람들과 하길",
            "C": "괜찮은 분위기만 유지되면 OK",
            "D": "다신 하기 싫다"
        }
    }
];

const score = { A: 0, B: 0, C: 0, D: 0 };
let currentQuestion = 0;

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
    if (highest === "A") resultText = "📋 리더형 – 팀을 이끄는 정리왕! 책임감과 체계가 무기입니다.";
    else if (highest === "B") resultText = "💡 협력형 – 함께 만들어가는 조율자! 의견 나누는 걸 즐깁니다.";
    else if (highest === "C") resultText = "🎈 분위기메이커 – 팀의 활력소! 모두가 편하게 느끼는 사람입니다.";
    else resultText = "🛋 관찰자형 – 조용히 흐름을 따르는 숨은 실세!";
    document.getElementById("quiz-box").innerHTML = `
    <h2>당신의 유형은?</h2>
    <p id='result'>${resultText}</p>
    <div class="mt-4 text-center">
        <a href="test.html" class="btn btn-outline-primary me-2">다른 테스트 하러 가기</a>
        <a href="../guide/test_teamwork_guide.html" class="btn btn-primary">유형별 해설 보기</a>
    </div>
`;
}

document.addEventListener("DOMContentLoaded", showQuestion);
