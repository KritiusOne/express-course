import { Request, Response } from "express";
import { movieServices } from "../services/movieServices.js";
import { CreateMovieDTO, Movie } from "../models/Movie.js";

export async function getMovie( req: Request, res: Response ) {
  const id = req.params.id
  if(!id){
    return res.status(400).json({
      message: `Id params is requered`
    })
  }
  const movie = await movieServices.getMovie(id)
  if(!movie){
    return res.status(404).json({
      message: "Movie doesn't exist"
    })
  }
  return res.status(200).json({
    message: `Movie was finded successfully`,
    movie
  })
}
export async function getMovies( req: Request, res: Response ) {
  console.log("Getting all movies")
  console.log("query params")
  console.log(JSON.stringify(req.query))
  const query = {
    limit: req.query.limit ? parseInt(req.query.limit as string) : 0,
    page: req.query.page ? parseInt(req.query.page as string) : 0
  }
  try {
    const movies = await movieServices.getMovies(query.limit, query.page)
    return res.status(200).json({
      message: `Movies was finded successfully`,
      movieNumber: movies.length,
      movies
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: `Error searching all movies`
    }) 
  }
}

// TODO: Body validation with a library like Joi, Yup or Zod
export async function createMovie( req: Request, res: Response ) {
  if(!req.body || Object.keys(req.body).length === 0){
    return res.status(400).json({
      message: "Body request is required"
    })
  }
  const body: CreateMovieDTO = req.body
  console.log("Creating movie with body")

  if(!body.title){
    return res.status(400).json({
      message: "Title is required"
    })
  }
  const movie  = await movieServices.createMovie({...body } as Movie)
  if(!movie){
    return res.status(500).json({
      message: "Error creating movie"
    })
  }
  return res.status(201).json({
    message: "Movie created successfully",
    movie
  })
}

//TOOD: Body validation with a library like Joi, Yup or Zod
export async function updateMovie( req: Request, res: Response ) {
  console.log("Updating movie")
  console.log("params")
  console.log(JSON.stringify(req.params))
  console.log("body")
  console.log(JSON.stringify(req.body))
  const id = req.params.id
  if(!id){
    return res.status(400).json({
      message: "Id params is required"
    })
  }
  if(!req.body || Object.keys(req.body).length === 0){
    return res.status(400).json({
      message: "Body request is required"
    })
  }
  const body: Movie = req.body
  console.log("Updating movie with body")
  console.log(JSON.stringify(body))
  const movie  = await movieServices.updateMovie(id ?? "", body)
  if(!movie){
    return res.status(500).json({
      message: "Error updating movie"
    })
  }
  return res.status(200).json({
    message: "Movie updated successfully",
    movie
  })
}