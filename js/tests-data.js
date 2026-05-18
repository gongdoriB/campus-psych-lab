const CAMPUS_PSYCH_TESTS = {
    focus: {
        id: "focus",
        title: "집중력 유형 테스트",
        subtitle: "당신만의 집중 패턴을 발견해보세요!",
        category: "study",
        estimatedMinutes: 3,
        listUrl: "test.html",
        guideUrl: "../guide/test_focus_guide.html",
        questions: [
            {
                id: "focus-q1",
                text: "Q1. 공부 시작 전 나는?",
                options: {
                    A: "계획표부터 세세히 짠다",
                    B: "책상 앞에 앉으면 일단 뿌듯함",
                    C: "SNS 확인부터 하고 시작",
                    D: "공부하는 척 하며 유튜브 킴"
                }
            },
            {
                id: "focus-q2",
                text: "Q2. 집중이 잘 되는 시간대는?",
                options: {
                    A: "아침 일찍",
                    B: "점심 직후",
                    C: "밤 10시 이후",
                    D: "그때그때 다름"
                }
            },
            {
                id: "focus-q3",
                text: "Q3. 공부 중 알림이 오면?",
                options: {
                    A: "무시하고 계속 집중",
                    B: "슬쩍 확인만 함",
                    C: "답장까지 하고 돌아옴",
                    D: "그대로 딴 길로 새버림"
                }
            },
            {
                id: "focus-q4",
                text: "Q4. 집중력 유지 시간은?",
                options: {
                    A: "1시간 이상도 거뜬",
                    B: "30분은 유지 가능",
                    C: "10~20분 간격으로 흐트러짐",
                    D: "집중은 무슨..."
                }
            },
            {
                id: "focus-q5",
                text: "Q5. 공부 중 주변 소음에 대한 반응은?",
                options: {
                    A: "전혀 신경 안 씀",
                    B: "약간 거슬리지만 견딤",
                    C: "집중력 뚝 떨어짐",
                    D: "소음 핑계로 멈춤"
                }
            },
            {
                id: "focus-q6",
                text: "Q6. 집중이 잘 안될 땐?",
                options: {
                    A: "간단한 운동으로 리프레시",
                    B: "잠깐 산책하거나 자리 벗어남",
                    C: "SNS나 유튜브로 휴식",
                    D: "그냥 포기함"
                }
            },
            {
                id: "focus-q7",
                text: "Q7. 공부 장소는?",
                options: {
                    A: "조용한 도서관 자리",
                    B: "내 방 책상",
                    C: "카페",
                    D: "그때그때 다른 장소"
                }
            },
            {
                id: "focus-q8",
                text: "Q8. 집중이 잘 되는 과목은?",
                options: {
                    A: "논리적이고 구조 있는 과목",
                    B: "내가 흥미 있는 과목",
                    C: "과제 위주 실습 과목",
                    D: "딱히 없음"
                }
            },
            {
                id: "focus-q9",
                text: "Q9. 집중을 위해 사용하는 도구는?",
                options: {
                    A: "타이머와 계획표",
                    B: "할 일 앱이나 스티커",
                    C: "BGM이나 집중 유튜브 영상",
                    D: "아무 도구도 안 씀"
                }
            },
            {
                id: "focus-q10",
                text: "Q10. 집중이 잘 되는 이유는?",
                options: {
                    A: "목표가 분명해서",
                    B: "습관 덕분",
                    C: "외부 자극 덕분",
                    D: "운빨"
                }
            }
        ],
        results: {
            A: {
                type: "A",
                title: "집중마스터형",
                emoji: "📚",
                summary: "완벽한 환경에서 최고의 성과를 내는 집중력 고수!",
                text: "📚 집중마스터형 – 완벽한 환경에서 최고의 성과를 내는 집중력 고수!"
            },
            B: {
                type: "B",
                title: "감성루틴러",
                emoji: "🌿",
                summary: "익숙한 루틴과 분위기 속에서 빛을 발하는 스타일!",
                text: "🌿 감성루틴러 – 익숙한 루틴과 분위기 속에서 빛을 발하는 스타일!"
            },
            C: {
                type: "C",
                title: "감각적 자극형",
                emoji: "🎧",
                summary: "영상이나 음악 등 외부 자극으로 집중을 이끄는 감각파!",
                text: "🎧 감각적 자극형 – 영상이나 음악 등 외부 자극으로 집중을 이끄는 감각파!"
            },
            D: {
                type: "D",
                title: "혼돈의 집중러",
                emoji: "🌀",
                summary: "어디서든 무엇이든, 오직 본능에 집중하는 자유형!",
                text: "🌀 혼돈의 집중러 – 어디서든 무엇이든, 오직 본능에 집중하는 자유형!"
            }
        }
    },
    love: {
        id: "love",
        title: "연애 유형 테스트",
        subtitle: "나의 연애 스타일을 가볍게 탐색해보세요!",
        category: "relationship",
        estimatedMinutes: 3,
        listUrl: "test.html",
        guideUrl: "../guide/test_love_guide.html",
        questions: [
            {
                id: "love-q1",
                text: "Q1. 연애 시작 전, 당신은?",
                options: {
                    A: "상대방을 충분히 관찰하고 천천히 다가감",
                    B: "마음이 생기면 바로 돌진!",
                    C: "친구로 지내며 자연스럽게 연결되길 바람",
                    D: "상대의 표현을 기다림"
                }
            },
            {
                id: "love-q2",
                text: "Q2. 데이트할 장소를 정할 때 나는?",
                options: {
                    A: "조용한 공간에서 깊은 대화가 가능한 곳",
                    B: "재밌고 활동적인 데이트 장소",
                    C: "트렌디한 맛집이나 분위기 좋은 카페",
                    D: "상대방이 원하는 곳을 우선함"
                }
            },
            {
                id: "love-q3",
                text: "Q3. 연애 중 연락 스타일은?",
                options: {
                    A: "필요한 만큼, 규칙적으로",
                    B: "수시로 연락하며 감정을 표현",
                    C: "대화가 자연스럽게 오갈 때만",
                    D: "상대의 스타일에 맞춰 조절"
                }
            },
            {
                id: "love-q4",
                text: "Q4. 다툼이 생기면 나는?",
                options: {
                    A: "서로의 입장을 정리해서 말함",
                    B: "감정적으로 바로 표현함",
                    C: "시간을 갖고 정리 후 이야기함",
                    D: "대체로 피하거나 유하게 넘김"
                }
            },
            {
                id: "love-q5",
                text: "Q5. 상대가 늦게 연락하면?",
                options: {
                    A: "바빴겠거니 이해함",
                    B: "왜 이제야 연락했는지 물어봄",
                    C: "서운하지만 말은 안 함",
                    D: "별생각 없이 넘어감"
                }
            },
            {
                id: "love-q6",
                text: "Q6. 애정 표현 방식은?",
                options: {
                    A: "말보다는 행동으로 표현",
                    B: "자주 말로 표현함",
                    C: "상대가 원할 때 표현함",
                    D: "소소한 선물이나 이벤트로"
                }
            },
            {
                id: "love-q7",
                text: "Q7. 연애에 있어 가장 중요한 건?",
                options: {
                    A: "신뢰와 존중",
                    B: "열정과 설렘",
                    C: "소통과 유머",
                    D: "배려와 안정감"
                }
            },
            {
                id: "love-q8",
                text: "Q8. 친구와 연인의 경계는?",
                options: {
                    A: "명확히 선을 긋는 편",
                    B: "자연스럽게 혼합됨",
                    C: "친구 같은 연인이 좋음",
                    D: "연인이면 친구보다 우선"
                }
            },
            {
                id: "love-q9",
                text: "Q9. 연애 기간이 길어지면?",
                options: {
                    A: "더 깊은 이해와 안정감 추구",
                    B: "새로운 자극이 필요함",
                    C: "그냥 일상이 됨",
                    D: "서로 존중하며 거리 유지"
                }
            },
            {
                id: "love-q10",
                text: "Q10. 이별을 마주할 때 나는?",
                options: {
                    A: "대화로 정리하며 끝맺음",
                    B: "감정에 휩쓸려 이별",
                    C: "서서히 거리두기 후 정리",
                    D: "조용히 마음을 닫고 떠남"
                }
            }
        ],
        results: {
            A: {
                type: "A",
                title: "관찰형 연애러",
                emoji: "💡",
                summary: "신중하고 배려 깊게 관계를 다져가는 스타일!",
                text: "💡 관찰형 연애러 – 신중하고 배려 깊게 관계를 다져가는 스타일!"
            },
            B: {
                type: "B",
                title: "돌진형 직진러",
                emoji: "🔥",
                summary: "감정에 솔직하고 표현에 적극적인 열정파!",
                text: "🔥 돌진형 직진러 – 감정에 솔직하고 표현에 적극적인 열정파!"
            },
            C: {
                type: "C",
                title: "자연스러운 연결러",
                emoji: "🌿",
                summary: "친구처럼 편안하고 유쾌한 연애를 선호!",
                text: "🌿 자연스러운 연결러 – 친구처럼 편안하고 유쾌한 연애를 선호!"
            },
            D: {
                type: "D",
                title: "배려형 맞춤러",
                emoji: "🤍",
                summary: "상대방의 감정에 맞춰 관계를 조율하는 섬세한 연애러!",
                text: "🤍 배려형 맞춤러 – 상대방의 감정에 맞춰 관계를 조율하는 섬세한 연애러!"
            }
        }
    },
    delay: {
        id: "delay",
        title: "과제 미루기 유형 테스트",
        subtitle: "나의 과제 패턴을 돌아보세요!",
        category: "study",
        estimatedMinutes: 3,
        listUrl: "test.html",
        guideUrl: "../guide/test_delay_guide.html",
        questions: [
            {
                id: "delay-q1",
                text: "Q1. 과제 마감이 코앞인데 당신은?",
                options: {
                    A: "바로 시작한다",
                    B: "한숨 자고 시작할 준비",
                    C: "갑자기 청소를 시작함",
                    D: "일단 넷플릭스 한 편만"
                }
            },
            {
                id: "delay-q2",
                text: "Q2. 친구가 과제 다 했냐고 물으면?",
                options: {
                    A: "응, 정리 중이야!",
                    B: "이제 하려던 참이야",
                    C: "자료 모으는 중이야",
                    D: "그게 뭐더라…"
                }
            },
            {
                id: "delay-q3",
                text: "Q3. 과제를 미룬 가장 큰 이유는?",
                options: {
                    A: "바빠서",
                    B: "귀찮아서",
                    C: "할 게 많아서",
                    D: "몰라서"
                }
            },
            {
                id: "delay-q4",
                text: "Q4. 과제 시작 전에 먼저 하는 행동은?",
                options: {
                    A: "계획 세우기",
                    B: "할 일 리스트 정리",
                    C: "배달 앱 열기",
                    D: "인터넷 서핑"
                }
            },
            {
                id: "delay-q5",
                text: "Q5. 제출 마감 1시간 전 당신은?",
                options: {
                    A: "마무리 점검 중",
                    B: "초집중해서 쓰는 중",
                    C: "친구 자료 참고 중",
                    D: "포기 직전"
                }
            },
            {
                id: "delay-q6",
                text: "Q6. 다음 학기에도 이런 패턴일까?",
                options: {
                    A: "절대 안 그래야지!",
                    B: "그땐 좀 나아지겠지?",
                    C: "비슷할 듯",
                    D: "그건 미래의 나에게 맡긴다"
                }
            },
            {
                id: "delay-q7",
                text: "Q7. 과제에 대한 당신의 태도는?",
                options: {
                    A: "미리미리 하는 편",
                    B: "압박이 있어야 함",
                    C: "타인의 도움을 받음",
                    D: "운에 맡김"
                }
            },
            {
                id: "delay-q8",
                text: "Q8. 마감 직전 집중력은?",
                options: {
                    A: "최고조",
                    B: "급하게는 하지만 집중은 됨",
                    C: "딴 생각이 많음",
                    D: "이미 늦음"
                }
            },
            {
                id: "delay-q9",
                text: "Q9. 과제 결과물에 대해 느끼는 건?",
                options: {
                    A: "만족한다",
                    B: "조금 아쉽다",
                    C: "살짝 부끄럽다",
                    D: "제출한 게 어디냐"
                }
            },
            {
                id: "delay-q10",
                text: "Q10. 다음 과제는?",
                options: {
                    A: "계획 세워서 하자",
                    B: "그래도 이번엔 빨리 해야지",
                    C: "그땐 좀 달라지길",
                    D: "미룰 가능성 99%"
                }
            }
        ],
        results: {
            A: {
                type: "A",
                title: "계획형 미루지러",
                emoji: "🧠",
                summary: "미루지 않고 체계적으로 과제를 해결하는 타입!",
                text: "🧠 계획형 미루지러 – 미루지 않고 체계적으로 과제를 해결하는 타입!"
            },
            B: {
                type: "B",
                title: "압박형 미루지러",
                emoji: "🔥",
                summary: "촉박해야 집중이 잘 되는 타입!",
                text: "🔥 압박형 미루지러 – 촉박해야 집중이 잘 되는 타입!"
            },
            C: {
                type: "C",
                title: "협업형 미루지러",
                emoji: "📎",
                summary: "도움과 자료 공유로 생존하는 타입!",
                text: "📎 협업형 미루지러 – 도움과 자료 공유로 생존하는 타입!"
            },
            D: {
                type: "D",
                title: "운명형 미루지러",
                emoji: "🎲",
                summary: "모든 걸 운에 맡기는 갬블러!",
                text: "🎲 운명형 미루지러 – 모든 걸 운에 맡기는 갬블러!"
            }
        }
    },
    cramming: {
        id: "cramming",
        title: "벼락치기 유형 테스트",
        subtitle: "시험기간 나의 생존 전략을 확인해보세요!",
        category: "study",
        estimatedMinutes: 3,
        listUrl: "test.html",
        guideUrl: "../guide/test_cramming_guide.html",
        questions: [
            {
                id: "cramming-q1",
                text: "Q1. 시험 전날 밤, 당신은?",
                options: {
                    A: "계획대로 복습 중",
                    B: "아직 멘붕 상태",
                    C: "친구 요약본 뒤적이는 중",
                    D: "찍을 포인트만 찾는 중"
                }
            },
            {
                id: "cramming-q2",
                text: "Q2. 시험 당일 아침, 당신은?",
                options: {
                    A: "정리된 노트로 최종 점검",
                    B: "아무 생각 없다",
                    C: "요약본 복습 중",
                    D: "감으로 승부 본다"
                }
            },
            {
                id: "cramming-q3",
                text: "Q3. 공부 시작 전에 먼저 하는 행동은?",
                options: {
                    A: "계획표 다시 정리함",
                    B: "불안해서 유튜브 본다",
                    C: "요약 공유 파일 찾는다",
                    D: "연습문제 찍기 연습부터 시작"
                }
            },
            {
                id: "cramming-q4",
                text: "Q4. 친구가 공부 진도 물어볼 때 나는?",
                options: {
                    A: "예상 질문까지 분석함",
                    B: "“아직 손도 못 댐…”",
                    C: "요약집 공유 받음",
                    D: "“찍을 거 공유 ㄱㄱ”"
                }
            },
            {
                id: "cramming-q5",
                text: "Q5. 공부하다가 막혔을 때 반응은?",
                options: {
                    A: "일단 핵심만 다시 정리",
                    B: "멘붕 오고 손 놈",
                    C: "검색+요약으로 커버",
                    D: "여긴 안 나오겠지 하고 넘김"
                }
            },
            {
                id: "cramming-q6",
                text: "Q6. 모르는 문제가 나왔을 때 나는?",
                options: {
                    A: "논리적으로 접근",
                    B: "손 던지고 넘김",
                    C: "비슷한 문제 기억하며 풀기 시도",
                    D: "감으로 가장 길어 보이는 걸 찍음"
                }
            },
            {
                id: "cramming-q7",
                text: "Q7. 공부 장소는?",
                options: {
                    A: "조용한 개인 공간",
                    B: "집안 여기저기 떠돌기",
                    C: "도서관이나 친구 방",
                    D: "카페 or 아무 데나"
                }
            },
            {
                id: "cramming-q8",
                text: "Q8. 벼락치기 중 가장 중요한 건?",
                options: {
                    A: "시간 분배",
                    B: "정신력",
                    C: "요약자료",
                    D: "찍기 스킬"
                }
            },
            {
                id: "cramming-q9",
                text: "Q9. 시험 끝나고의 내 한마디?",
                options: {
                    A: "노력한 만큼 나왔다",
                    B: "망한 듯",
                    C: "요약만 봤는데 괜찮았음",
                    D: "감이 좋아서 나쁘지 않았음"
                }
            },
            {
                id: "cramming-q10",
                text: "Q10. 다음 시험은 어떻게 할 예정?",
                options: {
                    A: "이번보다 미리미리",
                    B: "그때 가봐야 알 듯",
                    C: "자료 정리부터 해둠",
                    D: "어차피 벼락치기"
                }
            }
        ],
        results: {
            A: {
                type: "A",
                title: "계획적 분할러",
                emoji: "🧠",
                summary: "완벽 준비형! 시간과 계획을 무기로 시험을 제압합니다.",
                text: "🧠 계획적 분할러 – 완벽 준비형! 시간과 계획을 무기로 시험을 제압합니다."
            },
            B: {
                type: "B",
                title: "혼돈의 본능러",
                emoji: "😵",
                summary: "멘붕 속에서도 어떻게든 헤쳐나가는 스타일!",
                text: "😵 혼돈의 본능러 – 멘붕 속에서도 어떻게든 헤쳐나가는 스타일!"
            },
            C: {
                type: "C",
                title: "요약 사냥꾼",
                emoji: "📄",
                summary: "자료 수집과 요약에 능한 전략가!",
                text: "📄 요약 사냥꾼 – 자료 수집과 요약에 능한 전략가!"
            },
            D: {
                type: "D",
                title: "직관적 선별러",
                emoji: "🎯",
                summary: "감과 촉으로 승부하는 실전파!",
                text: "🎯 직관적 선별러 – 감과 촉으로 승부하는 실전파!"
            }
        }
    },
    teamwork: {
        id: "teamwork",
        title: "팀플 유형 테스트",
        subtitle: "팀 프로젝트에서 나의 역할을 확인해보세요!",
        category: "relationship",
        estimatedMinutes: 3,
        listUrl: "test.html",
        guideUrl: "../guide/test_teamwork_guide.html",
        questions: [
            {
                id: "teamwork-q1",
                text: "Q1. 팀플 시작 전, 당신은?",
                options: {
                    A: "미리 역할 분담을 정리해옴",
                    B: "자유롭게 정하자는 주의",
                    C: "일단 분위기 살핌",
                    D: "적극적인 사람에게 맡김"
                }
            },
            {
                id: "teamwork-q2",
                text: "Q2. 역할 분배 시 가장 먼저 떠오르는 생각은?",
                options: {
                    A: "내가 잘하는 걸 맡자",
                    B: "다 같이 나눠서 하면 되지",
                    C: "갈등 없이 정해지면 좋겠다",
                    D: "되도록 편한 걸 맡고 싶다"
                }
            },
            {
                id: "teamwork-q3",
                text: "Q3. 팀원 중 미루는 사람이 생기면?",
                options: {
                    A: "미리 연락해서 조율함",
                    B: "좀 기다려주자고 제안",
                    C: "눈치 보며 상황 파악",
                    D: "대신 해줄까 생각함"
                }
            },
            {
                id: "teamwork-q4",
                text: "Q4. 팀플에서 나는?",
                options: {
                    A: "기획·정리 담당",
                    B: "아이디어 제안자",
                    C: "분위기 메이커",
                    D: "슬쩍 따라가는 조력자"
                }
            },
            {
                id: "teamwork-q5",
                text: "Q5. 팀 회의 중 갈등이 생기면?",
                options: {
                    A: "중재하며 논리적으로 정리",
                    B: "다수 의견 따라감",
                    C: "화기애애하게 넘기려 함",
                    D: "그냥 조용히 있는 편"
                }
            },
            {
                id: "teamwork-q6",
                text: "Q6. 발표 전날 당신은?",
                options: {
                    A: "전체 구성 점검 중",
                    B: "슬슬 발표 연습 시작",
                    C: "응원하며 분위기 띄움",
                    D: "조용히 발표 파트만 외움"
                }
            },
            {
                id: "teamwork-q7",
                text: "Q7. 내가 팀에서 제일 신경 쓰는 건?",
                options: {
                    A: "결과물 완성도",
                    B: "팀워크와 협업",
                    C: "분위기와 감정",
                    D: "내 부담 최소화"
                }
            },
            {
                id: "teamwork-q8",
                text: "Q8. 팀플 종료 후 나는?",
                options: {
                    A: "피드백과 반성 정리함",
                    B: "고생했다며 모두에게 연락",
                    C: "단톡방에서 후일담 나눔",
                    D: "조용히 나감"
                }
            },
            {
                id: "teamwork-q9",
                text: "Q9. 팀플에서 내가 꺼리는 상황은?",
                options: {
                    A: "일정 밀리는 상황",
                    B: "역할 애매하게 겹치는 상황",
                    C: "불편한 분위기",
                    D: "내게 부담 쏠리는 상황"
                }
            },
            {
                id: "teamwork-q10",
                text: "Q10. 다음 팀플이 또 생긴다면?",
                options: {
                    A: "이번보다 더 잘해보고 싶다",
                    B: "좋은 사람들과 하길",
                    C: "괜찮은 분위기만 유지되면 OK",
                    D: "다신 하기 싫다"
                }
            }
        ],
        results: {
            A: {
                type: "A",
                title: "리더형",
                emoji: "📋",
                summary: "팀을 이끄는 정리왕! 책임감과 체계가 무기입니다.",
                text: "📋 리더형 – 팀을 이끄는 정리왕! 책임감과 체계가 무기입니다."
            },
            B: {
                type: "B",
                title: "협력형",
                emoji: "💡",
                summary: "함께 만들어가는 조율자! 의견 나누는 걸 즐깁니다.",
                text: "💡 협력형 – 함께 만들어가는 조율자! 의견 나누는 걸 즐깁니다."
            },
            C: {
                type: "C",
                title: "분위기메이커",
                emoji: "🎈",
                summary: "팀의 활력소! 모두가 편하게 느끼는 사람입니다.",
                text: "🎈 분위기메이커 – 팀의 활력소! 모두가 편하게 느끼는 사람입니다."
            },
            D: {
                type: "D",
                title: "관찰자형",
                emoji: "🛋",
                summary: "조용히 흐름을 따르는 숨은 실세!",
                text: "🛋 관찰자형 – 조용히 흐름을 따르는 숨은 실세!"
            }
        }
    }
};

if (typeof window !== "undefined") {
    window.CAMPUS_PSYCH_TESTS = CAMPUS_PSYCH_TESTS;
}
