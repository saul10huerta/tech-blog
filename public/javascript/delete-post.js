async function deleteFormHandler(event) {
  event.preventDefault();
  
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const delComment = await fetch(`/api/comments/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json());

 for (var i = 0; i < delComment.length; i++){
    console.log(delComment[i].id);
    await fetch(`/api/comments/${delComment[i].id}`, {
       method: 'DELETE'
    });

       console.log(`Deleted Comment ${delComment[i].id}`);
  }

  const response = await fetch(`/api/posts/${id}`, {
    method: 'DELETE'
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }

}

document.querySelector('.delete-post-btn').addEventListener('click', deleteFormHandler);