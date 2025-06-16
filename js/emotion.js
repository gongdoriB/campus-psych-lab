document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('emotionForm');
    const emotionList = document.getElementById('emotionList');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const emoji = document.getElementById('emotionSelect').value;
        const text = document.getElementById('emotionText').value.trim();

        if (text === '') return;

        const li = document.createElement('li');
        li.className = 'list-group-item';
        li.innerHTML = `
            <span><span class="emoji">${emoji}</span>${text}</span>
            <button class="btn btn-sm btn-outline-danger">삭제</button>
        `;

        li.querySelector('button').addEventListener('click', function () {
            li.remove();
        });

        emotionList.prepend(li);
        form.reset();
    });
});
