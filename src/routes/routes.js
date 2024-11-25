import express from "express";
import multer from "multer";
import cors from "cors";

import {
  listarPostsController,
  enviarPostController,
  uploadImagemController,
  atualizarPostController,
} from "../controller/postController.js";

const corsOptions = {
  origin: "http://localhost:8000",
  optionsSuccesStatus: 200,
}

// const upload = multer({ dest: "./uploads" });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ dest: "./uploads" }, storage);

const routes = (app) => {
  // Middleware to parse JSON request bodies
  app.use(express.json());
  app.use(cors(corsOptions));

  // Define a GET route to fetch all posts
  app.get("/posts", listarPostsController);

  app.post("/posts", enviarPostController);

  app.post("/upload", upload.single("image"), uploadImagemController);

  app.put("/upload/:id", atualizarPostController);
};

export default routes;
