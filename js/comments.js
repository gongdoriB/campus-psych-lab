document.addEventListener("DOMContentLoaded", function () {
    const commentInput = document.getElementById("commentInput");
    const commentList = document.getElementById("commentList");

    // 저장된 댓글 불러오기
    loadComments();

    // 댓글 추가 함수
    window.addComment = function () {
        const text = commentInput.value.trim();
        if (text) {
            const commentObj = { id: Date.now(), text };
            const comments = getSavedComments();
            comments.push(commentObj);
            saveComments(comments);
            appendComment(commentObj);
            commentInput.value = "";
        }
    };

    // 댓글 렌더링
    function appendComment(commentObj) {
        const li = document.createElement("li");
        li.className = "list-group-item d-flex justify-content-between align-items-center";
        li.dataset.id = commentObj.id;

        const span = document.createElement("span");
        span.innerText = commentObj.text;

        const delBtn = document.createElement("button");
        delBtn.className = "btn btn-sm btn-danger";
        delBtn.innerText = "삭제";
        delBtn.onclick = function () {
            deleteComment(commentObj.id);
        };

        li.appendChild(span);
        li.appendChild(delBtn);
        commentList.appendChild(li);
    }

    // 댓글 삭제
    function deleteComment(id) {
        let comments = getSavedComments();
        comments = comments.filter(comment => comment.id !== id);
        saveComments(comments);
        renderComments();
    }

    // 댓글 저장 및 불러오기
    function saveComments(comments) {
        localStorage.setItem("comments", JSON.stringify(comments));
    }

    function getSavedComments() {
        return JSON.parse(localStorage.getItem("comments") || "[]");
    }

    function renderComments() {
        commentList.innerHTML = "";
        const comments = getSavedComments();
        comments.forEach(appendComment);
    }

    function loadComments() {
        renderComments();
    }
});
