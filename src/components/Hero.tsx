import React from 'react';
import styled from 'styled-components';

const HeroContainer = styled.div`
  text-align: center;
  color: white;
  background-color: #282c34;
  padding: 50px 20px;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <h1>Bonjour, je suis Lucas Lengrand</h1>
      <p>Développeur Web Fullstack</p>
    </HeroContainer>
  );
};

export default Hero;
