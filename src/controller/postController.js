import { getTodosPosts, criarPost } from "../models/postModel.js";
// import postModel from "../models/postModel.js";

export async function listarPostsController (req, res) {
  // Fetch all posts using the asynchronous function
  const posts_array = await getTodosPosts();

  // Send the fetched posts as a JSON response with a 200 OK status code
  res.status(200).json(posts_array);
}

export async function enviarPostController(req, res) {
  const newPost = req.body;

  try {
    const postCriado = await criarPost(newPost);

    res.status(200).json(postCriado);
  } catch (e) {
    console.error(e.message);

    res.status(500).json({"Erro" : "Falha na requisição"});
  }
}
