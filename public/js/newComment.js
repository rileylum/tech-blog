const commentFormHandler = async(event) => {
    event.preventDefault();
    // get form values
    const content = document.querySelector('#comment-content').value.trim();
    const post_id = document.querySelector('#post-id').value;
    if (content && post_id) {
        // call api route
        const response = await fetch('/api/comments/new', {
            method: 'POST',
            body: JSON.stringify({content, post_id}),
            headers: { 'Content-Type': 'application/json'}
        });
        if (response.ok) {
            document.location.replace('/posts/view/'+post_id);
        } else {
            alert('Failed to create post')
        }
    }
};

document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);