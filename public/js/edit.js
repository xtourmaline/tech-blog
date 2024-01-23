const update = async (event) => {
    const title = document.querySelector("#title-edit");
    const content = document.querySelector("#content-edit");
    const id = document.querySelector(".grabID");

    console.log(id);
    const response = await fetch(`/api/blogPost/${id.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            title: title.value,
            content: content.value
        })
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#update').addEventListener('click', update);