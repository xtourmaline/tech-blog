const commentData = document.querySelector("#comment-create");
const id = document.querySelector(".grabID");

const comment = async () => {
    const response = await fetch('/api/comment/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            comment: commentData.value,
            blogPost_id: id.id
        })
    });

    if (response.ok) {
       document.location.reload();
    } else {
       alert(response.statusText);
    }
};

document.querySelector('#comment').addEventListener('click', comment);
