const title = document.querySelector("#title-create");
const content = document.querySelector("#content-create");

const create = async () => {
    const response = await fetch('/api/blogPost/', {
        method: 'POST',
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

document.querySelector('#create').addEventListener('click', create);
