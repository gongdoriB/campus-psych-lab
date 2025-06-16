const score = { A: 0, B: 0, C: 0, D: 0 };
let currentQuestion = 0;

const questions = [
    {
        question: "Q1. 과제 마감이 코앞인데 당신은?",
        options: {
            A: "바로 시작한다",
            B: "한숨 자고 시작할 준비",
            C: "갑자기 청소를 시작함",
            D: "일단 넷플릭스 한 편만"
        }
    },
    {
        question: "Q2. 친구가 과제 다 했냐고 물으면?",
        options: {
            A: "응, 정리 중이야!",
            B: "이제 하려던 참이야",
            C: "자료 모으는 중이야",
            D: "그게 뭐더라…"
        }
    },
    {
        question: "Q3. 과제를 미룬 가장 큰 이유는?",
        options: {
            A: "바빠서",
            B: "귀찮아서",
            C: "할 게 많아서",
            D: "몰라서"
        }
    },
    {
        question: "Q4. 과제 시작 전에 먼저 하는 행동은?",
        options: {
            A: "계획 세우기",
            B: "할 일 리스트 정리",
            C: "배달 앱 열기",
            D: "인터넷 서핑"
        }
    },
    {
        question: "Q5. 제출 마감 1시간 전 당신은?",
        options: {
            A: "마무리 점검 중",
            B: "초집중해서 쓰는 중",
            C: "친구 자료 참고 중",
            D: "포기 직전"
        }
    },
    {
        question: "Q6. 다음 학기에도 이런 패턴일까?",
        options: {
            A: "절대 안 그래야지!",
            B: "그땐 좀 나아지겠지?",
            C: "비슷할 듯",
            D: "그건 미래의 나에게 맡긴다"
        }
    },
    {
        question: "Q7. 과제에 대한 당신의 태도는?",
        options: {
            A: "미리미리 하는 편",
            B: "압박이 있어야 함",
            C: "타인의 도움을 받음",
            D: "운에 맡김"
        }
    },
    {
        question: "Q8. 마감 직전 집중력은?",
        options: {
            A: "최고조",
            B: "급하게는 하지만 집중은 됨",
            C: "딴 생각이 많음",
            D: "이미 늦음"
        }
    },
    {
        question: "Q9. 과제 결과물에 대해 느끼는 건?",
        options: {
            A: "만족한다",
            B: "조금 아쉽다",
            C: "살짝 부끄럽다",
            D: "제출한 게 어디냐"
        }
    },
    {
        question: "Q10. 다음 과제는?",
        options: {
            A: "계획 세워서 하자",
            B: "그래도 이번엔 빨리 해야지",
            C: "그땐 좀 달라지길",
            D: "미룰 가능성 99%"
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
    if (highest === "A") resultText = "🧠 계획형 미루지러 – 미루지 않고 체계적으로 과제를 해결하는 타입!";
    else if (highest === "B") resultText = "🔥 압박형 미루지러 – 촉박해야 집중이 잘 되는 타입!";
    else if (highest === "C") resultText = "📎 협업형 미루지러 – 도움과 자료 공유로 생존하는 타입!";
    else resultText = "🎲 운명형 미루지러 – 모든 걸 운에 맡기는 갬블러!";
    
    document.getElementById("quiz-box").innerHTML = `
    <h2>당신의 유형은?</h2>
    <p id='result'>${resultText}</p>
    <div class="mt-4 text-center">
        <a href="test.html" class="btn btn-outline-primary me-2">다른 테스트 하러 가기</a>
        <a href="../guide/test_delay_guide.html" class="btn btn-primary">유형별 해설 보기</a>
    </div>
`;

}

document.addEventListener("DOMContentLoaded", showQuestion);
