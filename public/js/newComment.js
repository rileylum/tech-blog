const commentFormHandler = async(event) => {
    event.preventDefault();

    const content = document.querySelector('#comment-content').value.trim();
    const post_id = document.querySelector('#post-id').value;
    console.log(content);
    console.log(post_id);
    if (content && post_id) {
        console.log('i did it');
        const response = await fetch('/api/comments/new', {
            method: 'POST',
            body: JSON.stringify({content, post_id}),
            headers: { 'Content-Type': 'application/json'}
        });
        console.log('i did it');
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