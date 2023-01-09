import Card from "react-bootstrap/Card";

export interface MovieItemProps {
  movie_name: string;
  Duration: number;
  year: number;
  genre: Array<string>;
  director: string;
  rating: number;
  country: string;
  actors: Array<string>;
}

export function MovieItem({
  movie_name,
  Duration,
  year,
  genre,
  director,
  rating,
  country,
  actors
}: MovieItemProps) {
  return (
    <Card style={{ width: "18rem", margin: "10px", height: "180px" }}>
      <Card.Body>
        <Card.Title>{movie_name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{year}</Card.Subtitle>
        <Card.Text style={{ marginBottom: "2px" }}>
          Directed by: {director}
        </Card.Text>
        <Card.Text>Rating: {rating}</Card.Text>
      </Card.Body>
    </Card>
  );
}
