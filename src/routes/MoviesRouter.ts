import { Router } from "express";
import { getMovie, getMovies, createMovie, updateMovie } from "../controllers/MovieController.js";

export const movieRouter = Router()

movieRouter.get("/movie/:id", getMovie)
movieRouter.get("/movies", getMovies)
movieRouter.post("/movie", createMovie) 
movieRouter.put("/movie/:id", updateMovie)