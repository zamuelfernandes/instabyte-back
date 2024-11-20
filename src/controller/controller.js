import { getTodosPosts } from "../models/postModel.js";

export async function listarPostsController (req, res) {
  // Fetch all posts using the asynchronous function
  const posts_array = await getTodosPosts();

  // Send the fetched posts as a JSON response with a 200 OK status code
  res.status(200).json(posts_array);
}
