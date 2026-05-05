import { useState, useEffect } from 'react';
import { Container, Row, Spinner, Alert, Col } from 'react-bootstrap';
import { getPopularMovies, searchMovies } from '../services/api';
import MovieCard from '../components/MovieCard';

const Home = ({ searchQuery }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError(null);
        
        let data;
       
        if (searchQuery) {
          data = await searchMovies(searchQuery);
        } else {
          
          data = await getPopularMovies();
        }
        
        setMovies(data);
      } catch (err) {
        setError('Erro ao carregar filmes. Tente novamente mais tarde.');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchQuery]); 

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4 text-warning fw-bold">
        {searchQuery ? `Resultados para: ${searchQuery}` : '🎬 Filmes Populares'}
      </h2>

      {loading && (
        <div className="text-center my-5">
          <Spinner animation="border" variant="warning" />
        </div>
      )}

      {error && <Alert variant="danger">{error}</Alert>}

      {!loading && !error && (
        <Row>
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          ) : (
            <Col className="text-center mt-5">
              <p className="text-white fs-4">Nenhum filme encontrado.</p>
            </Col>
          )}
        </Row>
      )}
    </Container>
  );
};

export default Home;