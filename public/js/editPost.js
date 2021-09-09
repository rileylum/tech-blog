const loginFormHandler = async(event) => {
    event.preventDefault();

    const id = document.querySelector('#post-id').value;
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    if (title && content) {
        const url = 'api/posts/edit/'+id
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({id, title, content}),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to update post')
        }
    }
};

document
    .querySelector('#edit-post-form')
    .addEventListener('submit', loginFormHandler);