const postFormHandler = async(event) => {
    event.preventDefault();
    // get form value
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();

    if (title && content) {
        // call api route
        const response = await fetch('/api/posts/new', {
            method: 'POST',
            body: JSON.stringify({title, content}),
            headers: { 'Content-Type': 'application/json'}
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post')
        }
    }
};

document
    .querySelector('#new-post-form')
    .addEventListener('submit', postFormHandler);