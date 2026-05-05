import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button, Badge, Spinner } from 'react-bootstrap';
import { getMovieDetails } from '../services/api';

const MovieDetails = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieDetails(id).then(setMovie);
  }, [id]);

  if (!movie) return <div className="text-center py-5"><Spinner animation="border" /></div>;

  return (
    <div 
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.4)), url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        backgroundSize: 'cover',
        minHeight: '100vh',
        color: 'white',
        paddingTop: '50px'
      }}
    >
      <Container>
        <Button variant="outline-light" className="mb-4" onClick={() => navigate(-1)}>
          ← Voltar
        </Button>
        <Row>
          <Col md={4}>
            <img 
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
              className="img-fluid rounded shadow-lg" 
              alt={movie.title} 
            />
          </Col>
          <Col md={8}>
            <h1 className="display-4 fw-bold">{movie.title}</h1>
            <p className="lead italic text-warning">{movie.tagline}</p>
            <div className="my-3">
              <Badge bg="warning" text="dark" className="me-2 fs-6">⭐ {movie.vote_average.toFixed(1)}</Badge>
              <span>{movie.release_date.split('-')[0]}</span>
            </div>
            <h3>Sinopse</h3>
            <p className="fs-5">{movie.overview}</p>
            <p><strong>Gêneros:</strong> {movie.genres.map(g => g.name).join(', ')}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MovieDetails;