/**
 * Create a new post using JSONPlaceholder API with an extra "excerpt" field.
 */

// Async function to create a new post using Fetch API
async function createPost() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
      // Post content
    const body = "hello , this is a third task for coalition technologies";

      // Data payload to send in the POST request
    const data = {
      title: "task 3",
      body: body,
      userId: 1,
      excerpt: body.substring(0, 20) // Custom field: first 20 chars of the body
    };

      // Send POST request to create the post
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
      // Parse and log the response
    const result = await response.json();
    console.log("Created Post:", result);
  }

  // Call the function to create the post
  createPost(); 
  