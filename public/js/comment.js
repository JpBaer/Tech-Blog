const newCommentHandler = async (event) => {
    event.preventDefault();

    const content = document.querySelector('#comment').value.trim();
    const post_id = document.querySelector('.new-comment-form').dataset.post;
    console.log(content)
    console.log(post_id)
    if(content){
        const response = await fetch(`/api/comments`,{
            method: 'POST',
            body: JSON.stringify({content, post_id}),
            headers:{
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.replace(`/post/${post_id}`);
        } else {
            alert('Failed to create blog')
        }
    }
}

document.querySelector('.new-comment-form').addEventListener('submit', newCommentHandler);