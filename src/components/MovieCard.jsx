import { Card, Col, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ movie }) => {
  return (
    
    <Col sm={12} md={6} lg={4} xl={3} className="mb-3">
      
      <Link to={`/movie/${movie.id}`} className="text-decoration-none">
      
        <Card className="h-100 shadow border-0 card-hover bg-dark text-white compact-card">
          <Card.Img 
            variant="top" 
            src={movie.poster_path ? `${IMAGE_PATH}${movie.poster_path}` : 'https://via.placeholder.com/500x750?text=Sem+Foto'} 
            alt={movie.title}
            style={{ height: '320px', objectFit: 'cover' }} 
          />
          
          <Card.Body className="p-2 d-flex flex-column">
            <Card.Title className="fs-6 fw-bold text-truncate mb-1" title={movie.title}>
              {movie.title}
            </Card.Title>
          
            <div className="d-flex justify-content-between align-items-center mb-1 small">
              <Badge bg="warning" text="dark" className="fw-bold">⭐ {movie.vote_average.toFixed(1)}</Badge>
              <span className="text-muted">
                {movie.release_date ? movie.release_date.split('-')[0] : 'N/A'}
              </span>
            </div>

           
            <Card.Text className="text-white small text-truncate-fade mb-0">
              {movie.overview ? movie.overview : "Sinopse não disponível."}
            </Card.Text>
            
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default MovieCard;