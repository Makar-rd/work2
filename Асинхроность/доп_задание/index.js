function textCommentary( body, email) {
    
    const div = document.createElement("div");
    div.className = 'post-comment';

    // const h1 = document.createElement('h1');
    // h1.className = 'post__title';
    // h1.innerText = title;
    // div.append(h1);

    // const p = document.createElement('p');
    // p.className = 'post__text';
    // p.innerText = body;
    // div.append(p);

    // const h3 = document.createElement('h3');
    // h3.className = 'post__comments-text';
    // h3.innerText = 'коментарии';
    // div.append(h3);

    // const comments = document.createElement('div');
    // comments.className = 'post-comment';
    // div.append(comments);

    const author = document.createElement('span');
    author.className = 'post-comment__author'; 
    author.innerText = email;
    div.append(author);

    const commentsText = document.createElement('span');
    commentsText.className = 'post-comment__text';
    commentsText.innerText = body;
    div.append(commentsText);

    return div;
}


// console.log('1 функция ', textCommentary())

function renderPost(postId) {
        // console.log('пост айди',postId)

   return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        console.log('Получен пост:', post);
        
        const body = document.body;
        const divTitle = document.createElement('div');
        
        body.append(divTitle)


        const h1 = document.createElement('h1');
        h1.className = 'post__title';
        h1.innerText = post.title;
        divTitle.append(h1);   

        const p = document.createElement('p');
        p.className = 'post__text';
        p.innerText = post.body;
        divTitle.append(p);
        
        const h3 = document.createElement('h3');
        h3.className = 'post__comments-text';
        h3.innerText = 'коментарии';
        divTitle.append(h3);

        return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`)
    .then(response => response.json()) 
    .then(comment => {
        console.log('Получены комментарии:', comment);
        comment.forEach(comments => {
            const text = textCommentary(comments.body, comments.email)
            document.body.append(text); 
        })
        })
        .catch(error => {console.error(error)})

    })
    .catch(error => {console.error(error)})
    
}
  
renderPost(1)
    