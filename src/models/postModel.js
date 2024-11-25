import conectarAoBanco from "../config/dbConfig.js";

// Establish a database connection using the provided connection string
const conexao = await conectarAoBanco(process.env.STRING_CONECXAO);

// Asynchronous function to fetch all posts from the 'posts' collection
export async function getTodosPosts() {
  // Select the 'imersao-instabytes' database
  const db = conexao.db("imersao-instabytes");
  // Select the 'posts' collection within the database
  const colecao = db.collection("posts");

  // Find all documents in the collection and return them as an array
  return colecao.find().toArray();
}

export async function criarPost(newPost) {
  const db = conexao.db("imersao-instabytes");
  const colecao = db.collection("posts");
  
  return colecao.insertOne(newPost);
}
