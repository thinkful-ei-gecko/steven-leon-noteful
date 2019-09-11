import React from 'react'
import { Link } from 'react-router-dom';

function Header() {
  return( 
  <Link to={'/'}>
    <h1>Noteful</h1>
  </Link>
  );
}

export default Header;