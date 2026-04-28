const commentInput = document.getElementById('commentInput');
const addCommentBtn = document.getElementById('addCommentBtn');
const commentsList = document.getElementById('commentsList');

addCommentBtn.addEventListener('click', () => {
    const text = commentInput.value;

    if (text.trim() !== "") {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');

        const now = new Date();
        const dateTime = now.toLocaleString();

        commentDiv.innerHTML = `
            <p>${text}</p>
            <div class="comment-footer">
                <span class="comment-date">Publicado el: ${dateTime}</span>
                <button class="delete-btn">Eliminar</button>
            </div>
        `;

        commentDiv.querySelector('.delete-btn').addEventListener('click', () => {
            commentDiv.remove();
        });

        commentsList.prepend(commentDiv);
        commentInput.value = "";
        commentInput.focus();
    } else {
        commentInput.classList.add('input-error');
        commentInput.placeholder = "¡Escribe algo antes de publicar!";
        setTimeout(() => {
            commentInput.classList.remove('input-error');
            commentInput.placeholder = "Escribe un comentario...";
        }, 2000);
    }
});