import { Router } from "express";
import { movieRouter } from "./MoviesRouter.js";

export const router = Router()

router.use("/", movieRouter)