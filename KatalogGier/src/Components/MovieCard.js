import React from "react";
import { Card, Button } from "react-bootstrap";

const MovieCard = ({ movie }) => {
  return (
    <Card className="movie-card">
      <Card.Img
        variant="top"
        src={movie.imageurl}
        style={{ height: 240, width: "auto" }}
      />
      <Card.Body>
        <Card.Title
          style={{ fontWeight: "bold", fontSize: 18, color: "darkblue" }}
        >
          {movie.title}
        </Card.Title>
        <Card.Title style={{ fontSize: 14, color: "gray", marginTop: -7 }}>
          Studio: {movie.studio}
        </Card.Title>
        <Card.Text style={{ fontSize: 15, marginTop: 20 }}>
          {movie.description}
        </Card.Text>
        <div>
          <h6>Tagi</h6>

          {movie.tags.map((tag, index) => (
            <p key={index} style={{ fontSize: 12, margin: 0 }}>
              {tag}
            </p>
          ))}
        </div>
        <Button variant="primary" className="mt-3">
          Zobacz szczegóły
        </Button>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;

// title
// director
// description
// actors
// imageurl
