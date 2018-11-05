import React from 'react';
import { Container } from 'reactstrap';
import './Header.min.css';

const Header = React.memo(() => (
  <Container>
    <i class="fas fa-book-open fa-2x"></i>
    <h1>readable</h1>
  </Container>
));

export default Header;