import React from "react"
import Card from 'react-bootstrap/Card'

export interface MovieItemProps {
    movie_name: string,
    Duration: number,
    year: number,
    genre: Array<string>,
    director: string,
    rating: number,
    country: string,
    actors: Array<string>
}


export function MovieItem(props: MovieItemProps) {
  return (
    <Card style={{ width: '18rem', margin: "10px", height: "180px" }}>
      <Card.Body>
        <Card.Title>{props.movie_name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{props.year}</Card.Subtitle>
        <Card.Text style={{marginBottom: "2px"}}>Directed by: {props.director}</Card.Text>
        <Card.Text>Rating: {props.rating}</Card.Text>
      </Card.Body>
    </Card>
  );
}