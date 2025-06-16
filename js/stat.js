import { Chart } from "@/components/ui/chart"
document.addEventListener("DOMContentLoaded", () => {
  // 감정 차트 (주간 변화)
  const emotionCtx = document.getElementById("emotionChart")
  if (emotionCtx) {
    new Chart(emotionCtx, {
      type: "line",
      data: {
        labels: ["월", "화", "수", "목", "금", "토", "일"],
        datasets: [
          {
            label: "감정 점수",
            data: [7, 5, 8, 6, 4, 9, 8],
            borderColor: "#4f46e5",
            backgroundColor: "rgba(79, 70, 229, 0.1)",
            tension: 0.4,
            fill: true,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 10,
          },
        },
      },
    })
  }

  // 시간대별 감정 차트
  const timeCtx = document.getElementById("timeEmotionChart")
  if (timeCtx) {
    new Chart(timeCtx, {
      type: "bar",
      data: {
        labels: ["06:00", "09:00", "12:00", "15:00", "18:00", "21:00", "24:00"],
        datasets: [
          {
            label: "평균 감정",
            data: [6, 7, 8, 6, 7, 8, 5],
            backgroundColor: "rgba(236, 72, 153, 0.8)",
            borderColor: "#ec4899",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 10,
          },
        },
      },
    })
  }

  // 요일별 감정 차트
  const dayCtx = document.getElementById("dayEmotionChart")
  if (dayCtx) {
    new Chart(dayCtx, {
      type: "radar",
      data: {
        labels: ["월요일", "화요일", "수요일", "목요일", "금요일", "토요일", "일요일"],
        datasets: [
          {
            label: "감정 평균",
            data: [6, 7, 8, 6, 5, 9, 8],
            backgroundColor: "rgba(79, 70, 229, 0.2)",
            borderColor: "#4f46e5",
            pointBackgroundColor: "#4f46e5",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#4f46e5",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          r: {
            beginAtZero: true,
            max: 10,
          },
        },
      },
    })
  }
})
