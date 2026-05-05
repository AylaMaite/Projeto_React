import { Navbar, Container, Form, FormControl, Button } from 'react-bootstrap';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavbarComponent = ({ onSearch }) => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(query);
    navigate('/'); 
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="sticky-top shadow">
      <Container>
       
        <Navbar.Brand as={Link} to="/" className="fw-bold text-warning">
          🎬 Catálogo React!
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex ms-auto" onSubmit={handleSubmit}>
            <FormControl
              type="search"
              placeholder="Pesquisar filmes..."
              className="me-2 bg-dark text-white border-secondary"
              aria-label="Search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <Button variant="outline-warning" type="submit">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;