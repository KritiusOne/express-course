import { Router } from "express";
import { getMovie, getMovies } from "../controllers/MovieController.js";

export const movieRouter = Router()

movieRouter.get("/movie/:id", getMovie)
movieRouter.get("/movies", getMovies)