async function deleteBlogPost(id) {
    const response = await fetch(`/api/blogPost/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
    });

    location.reload();
}