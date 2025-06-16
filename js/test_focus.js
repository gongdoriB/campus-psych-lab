const questions = [
    {
        question: "Q1. 공부 시작 전 나는?",
        options: {
            A: "계획표부터 세세히 짠다",
            B: "책상 앞에 앉으면 일단 뿌듯함",
            C: "SNS 확인부터 하고 시작",
            D: "공부하는 척 하며 유튜브 킴"
        }
    },
    {
        question: "Q2. 집중이 잘 되는 시간대는?",
        options: {
            A: "아침 일찍",
            B: "점심 직후",
            C: "밤 10시 이후",
            D: "그때그때 다름"
        }
    },
    {
        question: "Q3. 공부 중 알림이 오면?",
        options: {
            A: "무시하고 계속 집중",
            B: "슬쩍 확인만 함",
            C: "답장까지 하고 돌아옴",
            D: "그대로 딴 길로 새버림"
        }
    },
    {
        question: "Q4. 집중력 유지 시간은?",
        options: {
            A: "1시간 이상도 거뜬",
            B: "30분은 유지 가능",
            C: "10~20분 간격으로 흐트러짐",
            D: "집중은 무슨..."
        }
    },
    {
        question: "Q5. 공부 중 주변 소음에 대한 반응은?",
        options: {
            A: "전혀 신경 안 씀",
            B: "약간 거슬리지만 견딤",
            C: "집중력 뚝 떨어짐",
            D: "소음 핑계로 멈춤"
        }
    },
    {
        question: "Q6. 집중이 잘 안될 땐?",
        options: {
            A: "간단한 운동으로 리프레시",
            B: "잠깐 산책하거나 자리 벗어남",
            C: "SNS나 유튜브로 휴식",
            D: "그냥 포기함"
        }
    },
    {
        question: "Q7. 공부 장소는?",
        options: {
            A: "조용한 도서관 자리",
            B: "내 방 책상",
            C: "카페",
            D: "그때그때 다른 장소"
        }
    },
    {
        question: "Q8. 집중이 잘 되는 과목은?",
        options: {
            A: "논리적이고 구조 있는 과목",
            B: "내가 흥미 있는 과목",
            C: "과제 위주 실습 과목",
            D: "딱히 없음"
        }
    },
    {
        question: "Q9. 집중을 위해 사용하는 도구는?",
        options: {
            A: "타이머와 계획표",
            B: "할 일 앱이나 스티커",
            C: "BGM이나 집중 유튜브 영상",
            D: "아무 도구도 안 씀"
        }
    },
    {
        question: "Q10. 집중이 잘 되는 이유는?",
        options: {
            A: "목표가 분명해서",
            B: "습관 덕분",
            C: "외부 자극 덕분",
            D: "운빨"
        }
    }
];

let score = { A: 0, B: 0, C: 0, D: 0 };
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
    if (highest === "A") resultText = "📚 집중마스터형 – 완벽한 환경에서 최고의 성과를 내는 집중력 고수!";
    else if (highest === "B") resultText = "🌿 감성루틴러 – 익숙한 루틴과 분위기 속에서 빛을 발하는 스타일!";
    else if (highest === "C") resultText = "🎧 감각적 자극형 – 영상이나 음악 등 외부 자극으로 집중을 이끄는 감각파!";
    else resultText = "🌀 혼돈의 집중러 – 어디서든 무엇이든, 오직 본능에 집중하는 자유형!";
    document.getElementById("quiz-box").innerHTML = `
    <h2>당신의 유형은?</h2>
    <p id='result'>${resultText}</p>
    <div class="mt-4 text-center">
        <a href="test.html" class="btn btn-outline-primary me-2">다른 테스트 하러 가기</a>
        <a href="../guide/test_focus_guide.html" class="btn btn-primary">유형별 해설 보기</a>
    </div>
`;
}

document.addEventListener("DOMContentLoaded", showQuestion);
