import express from "express";
import { listarPostsController } from "../controller/controller.js";

const routes = (app) => {
  // Middleware to parse JSON request bodies
  app.use(express.json());

  // Define a GET route to fetch all posts
  app.get("/posts", listarPostsController);
};

export default routes;