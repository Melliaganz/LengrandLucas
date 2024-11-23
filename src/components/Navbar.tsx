import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #121212;
  color: white;
`;

const NavbarLinks = styled.div`
  display: flex;
  gap: 20px;
`;

const Navbar = () => {
  return (
    <NavbarContainer style={{display: 'flex', flexDirection:'row', alignItems:'center'}}>
      <a href="/" title='Accueil'>
      <h1>Lengrand Lucas</h1>
      </a>
      <NavbarLinks >
        <Link to="/" title='Accueil'>Accueil</Link>
        <Link to="/projects" title='Projets'>Projets</Link>
        <Link to="/skills"title='Compétences'>Compétences</Link>
        <Link to="/contact"title='Contacts'>Contacts</Link>
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default Navbar;
