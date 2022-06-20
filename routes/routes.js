import { postControllerCreate, postControllerIndex } from "../controllers/PostController.js";
import express from "express";
export const routes = express.Router();
routes.post('/post', postControllerCreate);
routes.get('/posts', postControllerIndex);

