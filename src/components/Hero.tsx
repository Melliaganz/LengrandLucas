import React from 'react';
import { Card, Container } from 'react-bootstrap';
import styled, { keyframes } from 'styled-components';

// Animation pour le défilement horizontal continu
const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
`;

// Styled Component pour la liste défilante
const ScrollableTechList = styled.div`
  overflow: hidden; /* Cache les éléments hors du conteneur */
  width: 100%;
  padding: 10px 0;

  .logos {
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 20px;
    animation: ${scroll} 15s linear infinite; /* Animation continue */
  }

  .logos img {
    height: 60px;
    object-fit: contain;
  }
`;

const HeroContainer = styled.div`
  text-align: center;
  color: white;
  background-color: #282c34;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
`;

const StyledContainer = styled(Container)`
  max-width: 1200px; /* Limite la largeur */
  margin: 0 auto; /* Centre le conteneur */
  padding: 0 15px; /* Ajoute une petite marge intérieure */
`;

const Hero = () => {
  return (
    <StyledContainer>
      <HeroContainer>
        <h1>Bonjour, je suis Lucas Lengrand</h1>
        <p>Développeur Web / Mobile</p>
      </HeroContainer>

      <Card
        style={{
          padding: '25px',
          borderRadius: '25px',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          marginTop: '50px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.4)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <img
          src="/images/ezgif-3-e5da34bd12.gif"
          alt="Portrait de Lucas Lengrand"
          style={{
            maxWidth: '100%',
            height: '25vh',
            borderRadius: '25px',
            objectFit: 'cover',
          }}
        />
        {/* Bloc de texte pour la description */}
        <div
          style={{
            fontWeight: 600,
            marginTop: '15px',
            color: 'white',
            textAlign: 'center',
            fontSize: '14px',
            lineHeight: '1.5',
          }}
        >
          <p>
            Depuis toujours passionné par l'informatique
            <br /> et notamment le Développement Informatique,
            <br /> je vous accompagnerai dans vos différents projets numériques
            <br />
            ou la création de vos applications.
          </p>
        </div>

        {/* Liste des technologies avec défilement infini */}
        <ScrollableTechList>
      <div className="logos">
        {/* Logos à défiler */}
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" title="React" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js Logo" title="Node.js" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript Logo" title="JavaScript" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5 Logo" title="HTML5" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg" alt="CSS3 Logo" title="CSS3" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="PostgreSQL Logo" title="PostgreSQL" />
        <img src="https://cdn.worldvectorlogo.com/logos/react-native-1.svg" alt="React Native Logo" title="React Native" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript Logo" title="TypeScript" />
        <img src="https://upload.wikimedia.org/wikipedia/fr/2/2e/Java_Logo.svg" alt="Java Logo" title="Java" />
        <img src="https://www.svgrepo.com/show/353831/gradle.svg" alt="Gradle Logo" title="Gradle" />
        <img src="https://developer.apple.com/assets/elements/icons/xcode-12/xcode-12-96x96_2x.png" alt="Xcode Logo" title="Xcode" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/2048px-Android_Studio_icon_%282023%29.svg.png" alt="Android Studio Logo" title="Android Studio" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5 Logo" title="HTML5" />
        {/* Répétition automatique */}
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" title="React" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js Logo" title="Node.js" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript Logo" title="JavaScript" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5 Logo" title="HTML5" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg" alt="CSS3 Logo" title="CSS3" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="PostgreSQL Logo" title="PostgreSQL" />
        <img src="https://cdn.worldvectorlogo.com/logos/react-native-1.svg" alt="React Native Logo" title="React Native" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript Logo" title="TypeScript" />
        <img src="https://upload.wikimedia.org/wikipedia/fr/2/2e/Java_Logo.svg" alt="Java Logo" title="Java" />
        <img src="https://www.svgrepo.com/show/353831/gradle.svg" alt="Gradle Logo" title="Gradle" />
        <img src="https://developer.apple.com/assets/elements/icons/xcode-12/xcode-12-96x96_2x.png" alt="Xcode Logo" title="Xcode" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/2048px-Android_Studio_icon_%282023%29.svg.png" alt="Android Studio Logo" title="Android Studio" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5 Logo" title="HTML5" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="React Logo" title="React" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" alt="Node.js Logo" title="Node.js" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript Logo" title="JavaScript" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5 Logo" title="HTML5" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/3/3d/CSS.3.svg" alt="CSS3 Logo" title="CSS3" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" alt="PostgreSQL Logo" title="PostgreSQL" />
        <img src="https://cdn.worldvectorlogo.com/logos/react-native-1.svg" alt="React Native Logo" title="React Native" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg" alt="TypeScript Logo" title="TypeScript" />
        <img src="https://upload.wikimedia.org/wikipedia/fr/2/2e/Java_Logo.svg" alt="Java Logo" title="Java" />
        <img src="https://www.svgrepo.com/show/353831/gradle.svg" alt="Gradle Logo" title="Gradle" />
        <img src="https://developer.apple.com/assets/elements/icons/xcode-12/xcode-12-96x96_2x.png" alt="Xcode Logo" title="Xcode" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Android_Studio_icon_%282023%29.svg/2048px-Android_Studio_icon_%282023%29.svg.png" alt="Android Studio Logo" title="Android Studio" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" alt="HTML5 Logo" title="HTML5" />
      </div>
    </ScrollableTechList>
      </Card>
    </StyledContainer>
  );
};

export default Hero;
