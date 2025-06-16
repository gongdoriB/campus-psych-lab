function addContent() {
    const text = document.getElementById("newContent").value;
    if (text.trim()) {
        const para = document.createElement("p");
        para.innerText = text;
        document.querySelector(".add-section").before(para);
        document.getElementById("newContent").value = "";
    }
}

function addComment() {
    const name = document.getElementById("commentName").value || "익명";
    const comment = document.getElementById("commentText").value;
    if (comment.trim()) {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.innerHTML = `<strong>${name}</strong>: ${comment}`;
        document.getElementById("commentList").appendChild(li);
        document.getElementById("commentText").value = "";
    }
}

// 수정 기능 추가
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".edit-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = this.parentElement;
            const originalHTML = target.innerHTML;
            const contentText = target.innerText.replace("[수정]", "").trim();
            const textarea = document.createElement("textarea");
            textarea.className = "form-control my-2";
            textarea.value = contentText;

            const saveBtn = document.createElement("button");
            saveBtn.className = "btn btn-sm btn-primary me-2";
            saveBtn.innerText = "저장";

            const cancelBtn = document.createElement("button");
            cancelBtn.className = "btn btn-sm btn-secondary";
            cancelBtn.innerText = "취소";

            // 기존 내용 제거 후 textarea 추가
            target.innerHTML = "";
            target.appendChild(textarea);
            target.appendChild(saveBtn);
            target.appendChild(cancelBtn);

            saveBtn.addEventListener("click", () => {
                target.innerHTML = `${textarea.value} <a href="#" class="edit-link">[수정]</a>`;
                addEditListeners(); // 다시 이벤트 바인딩
            });

            cancelBtn.addEventListener("click", () => {
                target.innerHTML = originalHTML;
                addEditListeners(); // 다시 이벤트 바인딩
            });
        });
    });
});

function addEditListeners() {
    document.querySelectorAll(".edit-link").forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const target = this.parentElement;
            const contentText = target.innerText.replace("[수정]", "").trim();
            const originalHTML = target.innerHTML;

            const textarea = document.createElement("textarea");
            textarea.className = "form-control my-2";
            textarea.value = contentText;

            const saveBtn = document.createElement("button");
            saveBtn.className = "btn btn-sm btn-primary me-2";
            saveBtn.innerText = "저장";

            const cancelBtn = document.createElement("button");
            cancelBtn.className = "btn btn-sm btn-secondary";
            cancelBtn.innerText = "취소";

            target.innerHTML = "";
            target.appendChild(textarea);
            target.appendChild(saveBtn);
            target.appendChild(cancelBtn);

            saveBtn.addEventListener("click", () => {
                target.innerHTML = `${textarea.value} <a href="#" class="edit-link">[수정]</a>`;
                addEditListeners();
            });

            cancelBtn.addEventListener("click", () => {
                target.innerHTML = originalHTML;
                addEditListeners();
            });
        });
    });
}
