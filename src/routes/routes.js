import express from "express";
import { listarPostsController, enviarPostController } from "../controller/postController.js";

const routes = (app) => {
  // Middleware to parse JSON request bodies
  app.use(express.json());

  // Define a GET route to fetch all posts
  app.get("/posts", listarPostsController);

  app.post("/posts", enviarPostController);
};

export default routes;