import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/style/footer.scss';

const footer = () => (
  <footer className='footer'>
    <Link to='/'>Términos de uso</Link>
    <Link to='/'>Privacidad</Link>
    <Link to='/'>Ayuda</Link>
    <p>Este no es un proyecto real, puedes visitar mi github si deseas ver mas de mi portafolio</p>
    <a href='https://github.com/bueno12223'>GitHub</a>
  </footer>
);
export default footer;
