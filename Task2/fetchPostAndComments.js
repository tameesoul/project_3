/**
 * Fetch post ID 50 and merge its comments into a single object.
 */
async function fetchPostAndComments() {
    const postUrl = 'https://jsonplaceholder.typicode.com/posts/50';
    const commentsUrl = 'https://jsonplaceholder.typicode.com/posts/50/comments';
  
    const postResponse = await fetch(postUrl);
    const post = await postResponse.json();
  
    const commentsResponse = await fetch(commentsUrl);
    const comments = await commentsResponse.json();
  
    const merged = {
      ...post,
      comments: comments
    };
  
    console.log("Merged Post + Comments:", merged);
  }
  
  fetchPostAndComments();
  