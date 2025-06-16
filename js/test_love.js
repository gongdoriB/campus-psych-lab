const score = { A: 0, B: 0, C: 0, D: 0 };
let currentQuestion = 0;

const questions = [
    {
        "question": "Q1. 연애 시작 전, 당신은?",
        "options": {
            "A": "상대방을 충분히 관찰하고 천천히 다가감",
            "B": "마음이 생기면 바로 돌진!",
            "C": "친구로 지내며 자연스럽게 연결되길 바람",
            "D": "상대의 표현을 기다림"
        }
    },
    {
        "question": "Q2. 데이트할 장소를 정할 때 나는?",
        "options": {
            "A": "조용한 공간에서 깊은 대화가 가능한 곳",
            "B": "재밌고 활동적인 데이트 장소",
            "C": "트렌디한 맛집이나 분위기 좋은 카페",
            "D": "상대방이 원하는 곳을 우선함"
        }
    },
    {
        "question": "Q3. 연애 중 연락 스타일은?",
        "options": {
            "A": "필요한 만큼, 규칙적으로",
            "B": "수시로 연락하며 감정을 표현",
            "C": "대화가 자연스럽게 오갈 때만",
            "D": "상대의 스타일에 맞춰 조절"
        }
    },
    {
        "question": "Q4. 다툼이 생기면 나는?",
        "options": {
            "A": "서로의 입장을 정리해서 말함",
            "B": "감정적으로 바로 표현함",
            "C": "시간을 갖고 정리 후 이야기함",
            "D": "대체로 피하거나 유하게 넘김"
        }
    },
    {
        "question": "Q5. 상대가 늦게 연락하면?",
        "options": {
            "A": "바빴겠거니 이해함",
            "B": "왜 이제야 연락했는지 물어봄",
            "C": "서운하지만 말은 안 함",
            "D": "별생각 없이 넘어감"
        }
    },
    {
        "question": "Q6. 애정 표현 방식은?",
        "options": {
            "A": "말보다는 행동으로 표현",
            "B": "자주 말로 표현함",
            "C": "상대가 원할 때 표현함",
            "D": "소소한 선물이나 이벤트로"
        }
    },
    {
        "question": "Q7. 연애에 있어 가장 중요한 건?",
        "options": {
            "A": "신뢰와 존중",
            "B": "열정과 설렘",
            "C": "소통과 유머",
            "D": "배려와 안정감"
        }
    },
    {
        "question": "Q8. 친구와 연인의 경계는?",
        "options": {
            "A": "명확히 선을 긋는 편",
            "B": "자연스럽게 혼합됨",
            "C": "친구 같은 연인이 좋음",
            "D": "연인이면 친구보다 우선"
        }
    },
    {
        "question": "Q9. 연애 기간이 길어지면?",
        "options": {
            "A": "더 깊은 이해와 안정감 추구",
            "B": "새로운 자극이 필요함",
            "C": "그냥 일상이 됨",
            "D": "서로 존중하며 거리 유지"
        }
    },
    {
        "question": "Q10. 이별을 마주할 때 나는?",
        "options": {
            "A": "대화로 정리하며 끝맺음",
            "B": "감정에 휩쓸려 이별",
            "C": "서서히 거리두기 후 정리",
            "D": "조용히 마음을 닫고 떠남"
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
    if (highest === "A") resultText = "💡 관찰형 연애러 – 신중하고 배려 깊게 관계를 다져가는 스타일!";
    else if (highest === "B") resultText = "🔥 돌진형 직진러 – 감정에 솔직하고 표현에 적극적인 열정파!";
    else if (highest === "C") resultText = "🌿 자연스러운 연결러 – 친구처럼 편안하고 유쾌한 연애를 선호!";
    else resultText = "🤍 배려형 맞춤러 – 상대방의 감정에 맞춰 관계를 조율하는 섬세한 연애러!";
    
    document.getElementById("quiz-box").innerHTML = `
    <h2>당신의 유형은?</h2>
    <p id='result'>${resultText}</p>
    <div class="mt-4 text-center">
        <a href="test.html" class="btn btn-outline-primary me-2">다른 테스트 하러 가기</a>
        <a href="../guide/test_love_guide.html" class="btn btn-primary">유형별 해설 보기</a>
    </div>
`;
}

document.addEventListener("DOMContentLoaded", showQuestion);
