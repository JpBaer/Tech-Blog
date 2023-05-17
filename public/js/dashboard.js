const newFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#blog-title').value.trim();
    const content = document.querySelector('#blog-content').value.trim();
    console.log(title)
    console.log(content)

    if(title && content) {
        console.log(JSON.stringify({title, content}))
        const response = await fetch(`/api/posts`, {
            method: 'POST',
            body: JSON.stringify({title, content}),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        console.log('Post successfully sent to API')
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create blog')
        }
    }
};

document.querySelector('.new-blog-form').addEventListener('submit', newFormHandler);