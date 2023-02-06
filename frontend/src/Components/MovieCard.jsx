import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function MovieCard({ id, name, image, type }) {
  const navigate = useNavigate();

  return (
    <Card className="text-center movie-card" style={{ width: "18rem" }}>
      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${image}`} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Button onClick={() => navigate(`/${type}/${id}`)} variant="primary">
          View Details
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MovieCard;
