import express from "express";
import multer from "multer";

import {
  listarPostsController,
  enviarPostController,
  uploadImagemController,
} from "../controller/postController.js";

// const upload = multer({ dest: "./uploads" });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ dest: "./uploads" }, storage);

const routes = (app) => {
  // Middleware to parse JSON request bodies
  app.use(express.json());

  // Define a GET route to fetch all posts
  app.get("/posts", listarPostsController);

  app.post("/posts", enviarPostController);

  app.post("/upload", upload.single("image"), uploadImagemController);
};

export default routes;
