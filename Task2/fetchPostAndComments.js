/**
 * Fetch post ID 50 and merge its comments into a single object.
 */
async function fetchPostAndComments() {
    const postUrl = 'https://jsonplaceholder.typicode.com/posts/50';
    const commentsUrl = 'https://jsonplaceholder.typicode.com/posts/50/comments';

      // Fetch the post
    const postResponse = await fetch(postUrl);
    const post = await postResponse.json();
  
      // Fetch comments related to that post
    const commentsResponse = await fetch(commentsUrl);
    const comments = await commentsResponse.json();
  
      // Combine post and its comments in one object
    const merged = {
      ...post, // Spread all post fields
      comments: comments // Add comments as a new field
    };
  
      // Log the combined result
    console.log("Merged Post + Comments:", merged);
  }
  
  fetchPostAndComments();
  