import express from "express";

const posts_array = [
  {
    id: 0,
    descricao: "Gato curioso olhando para a câmera",
    imagem: "https://placekitten.com/400/200"
  },
  {
    id: 1,
    descricao: "Paisagem com um gato",
    imagem: "https://placekitten.com/g/200/300"
  },
  {
    id: 2,
    descricao: "Gato brincando com um novelo de lã",
    imagem: "https://placekitten.com/200/300"
  }
];

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
  res.status(200).json(posts_array);
});

function buscarPostPorId(id) {
  return posts_array.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get("/posts/:id", (req, res) => {
  const index = buscarPostPorId(req.params.id);
  res.status(200).json(posts_array[index]);
});