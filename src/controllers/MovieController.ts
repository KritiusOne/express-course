import { Request, Response } from "express";
import { movieServices } from "../services/movieServices.js";

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
  try {
    const movies = await movieServices.getAllMovies()
    return res.status(200).json({
      message: `Movies was finded successfully`,
      movies
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({
      message: `Error searching all movies`
    }) 
  }
}