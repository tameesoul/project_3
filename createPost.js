/**
 * Create a new post using JSONPlaceholder API with an extra "excerpt" field.
 */
async function createPost() {
    const url = 'https://jsonplaceholder.typicode.com/posts';
    const body = "hello , this is a third task for coalition technologies";
    const data = {
      title: "task 3",
      body: body,
      userId: 1,
      excerpt: body.substring(0, 20)
    };
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
  
    const result = await response.json();
    console.log("Created Post:", result);
  }


  createPost(); // called /tasted the method usign node createPost.js
  