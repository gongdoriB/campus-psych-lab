document.addEventListener("DOMContentLoaded", function () {
    const sharedEmotions = [
        { emoji: "😢", text: "오늘 팀플 너무 힘들었어요... 말 안 통하는 조원 ㅠㅠ" },
        { emoji: "😊", text: "카페에서 혼자 공부하는 시간 너무 좋았다 ☕️" },
        { emoji: "😰", text: "기말고사 다가오니까 너무 불안해요..." },
        { emoji: "❤️", text: "좋아하는 사람이랑 오늘 밥 먹었다..!" },
        { emoji: "😴", text: "수업 듣다가 꾸벅... 정신 차려야지 💤" },
        { emoji: "😡", text: "과제 쌓이고 스트레스 받아서 폭발 직전 😠" }
    ];

    const container = document.getElementById("sharedEmotions");

    sharedEmotions.forEach(({ emoji, text }) => {
        const col = document.createElement("div");
        col.className = "col-md-6 col-lg-4 mb-4";

        const card = document.createElement("div");
        card.className = "card h-100 shadow-sm";

        const body = document.createElement("div");
        body.className = "card-body";

        // 이모지 및 텍스트
        const title = document.createElement("h5");
        title.className = "card-title fs-3";
        title.textContent = emoji;

        const message = document.createElement("p");
        message.className = "card-text text-muted small";
        message.textContent = text;

        // 댓글 입력창
        const input = document.createElement("input");
        input.type = "text";
        input.placeholder = "댓글을 입력해보세요";
        input.className = "form-control form-control-sm mb-2 comment-input";

        const submitBtn = document.createElement("button");
        submitBtn.className = "btn btn-outline-primary btn-sm comment-submit";
        submitBtn.textContent = "등록";

        const commentList = document.createElement("ul");
        commentList.className = "list-unstyled mt-3 comment-list small text-muted";

        submitBtn.addEventListener("click", () => {
            const comment = input.value.trim();
            if (comment !== "") {
                const li = document.createElement("li");
                li.className = "d-flex justify-content-between align-items-center mb-1";
                li.innerHTML = `<span>💬 ${comment}</span> 
                                <button class="btn btn-sm btn-danger btn-delete" title="삭제">❌</button>`;

                // 삭제 버튼 이벤트
                li.querySelector(".btn-delete").addEventListener("click", () => {
                    li.remove();
                });

                commentList.appendChild(li);
                input.value = "";
            }
        });

        body.appendChild(title);
        body.appendChild(message);
        body.appendChild(input);
        body.appendChild(submitBtn);
        body.appendChild(commentList);

        card.appendChild(body);
        col.appendChild(card);
        container.appendChild(col);
    });
});
