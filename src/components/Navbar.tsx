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
    <NavbarContainer>
      <h1>Lengrand Lucas</h1>
      <NavbarLinks>
        <Link to="/">Accueil</Link>
        <Link to="/projects">Projets</Link>
        <Link to="/skills">Compétences</Link>
        <Link to="/contact">Contact</Link>
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default Navbar;
