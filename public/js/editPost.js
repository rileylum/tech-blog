const editFormHandler = async(event) => {
    event.preventDefault();
    // get values from form
    const id = document.querySelector('#post-id').value;
    const title = document.querySelector('#post-title').value.trim();
    const content = document.querySelector('#post-content').value.trim();
    // if form filled in
    if (title && content) {
        const url = window.location.origin + '/api/posts/edit/'+id;
        // call api to update post
        const response = await fetch(url, {
            method: 'PATCH',
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
    .addEventListener('submit', editFormHandler);