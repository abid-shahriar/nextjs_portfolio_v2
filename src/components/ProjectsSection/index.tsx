import { useEffect, useState } from 'react';
import styled from 'styled-components';

import ProjectBox from './ProjectBox';

export default function Projects() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mobileWith = window.innerWidth < 992;

    if (mobileWith) {
      setIsMobile(true);
    }
  }, []);

  return (
    <SectionContainer id="projects">
      <ProjectsWrapper>
        <ProjectBox
          img="/img/crypto-sphere.jpg"
          title="cryptosphere"
          responsiveness="full responsive"
          stack={['TypeScript', 'NextJS', 'NextJS(ISR)', 'Styled-Components', 'ChartJS', 'RapidApi', 'CoinrankingApi']}
          codeLink="https://github.com/abid-shahriar/crypto-sphere"
          liveLink="https://cryptosphere.vercel.app"
          delay={isMobile ? '0.5s' : '0.5s'}
        />
        <ProjectBox
          img="/img/wikiance.jpg"
          title="Wikiance"
          responsiveness="full responsive"
          stack={['TypeScript', 'SCSS', 'NextJS', 'ReactJS', 'Styled-Components', 'React-Icons']}
          codeLink=""
          liveLink="https://wikiance.com"
          delay={isMobile ? '0.5s' : '0.7s'}
        />
        <ProjectBox
          img="/img/techiio.jpg"
          title="Techiio"
          responsiveness="partial responsive"
          stack={['ReactJS', 'Redux', 'Styled-Components', 'SCSS', 'semantic-ui-react', 'React-PDF']}
          codeLink=""
          liveLink="https://techiio.com"
          delay={isMobile ? '0.5s' : '0.9s'}
        />
        <ProjectBox
          img="/img/eevee.jpg"
          title="Eevee"
          responsiveness="full responsive"
          stack={['TypeScript', 'SCSS', 'NextJS', 'Styled-Components', 'WowJS', 'React-Slick']}
          codeLink=""
          liveLink="https://eevee.to"
          delay={isMobile ? '0.5s' : '1.1s'}
        />
        <ProjectBox
          img="/img/moviesphere.jpg"
          title="Moviesphere"
          responsiveness="full responsive"
          stack={['TypeScript', 'NextJS', 'NextJS(ISR)', 'Styled-Components', 'react-slick', 'MovieDB Api']}
          codeLink="https://github.com/abid-shahriar/moviesphere"
          liveLink="https://moviesphere.abidshahriar.me/"
          delay={isMobile ? '0.5s' : '1.3s'}
        />
        <ProjectBox
          img="/img/memory-game.jpg"
          title="Memory Game"
          responsiveness="full responsive"
          stack={['ReactJS', 'TailwindCSS', 'TypeScript']}
          codeLink="https://github.com/abid-shahriar/memory-game"
          liveLink="https://memory123.netlify.app"
          delay={isMobile ? '0.5s' : '1.5s'}
        />
      </ProjectsWrapper>
    </SectionContainer>
  );
}

const SectionContainer = styled.section`
  min-height: calc(100vh - var(--nav-height));
  background-color: var(--bg-dark);
  display: flex;
  justify-content: center;

  && {
    padding: 10rem 2.5%;
  }
`;

const ProjectsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: var(--max-width);
  gap: 4rem;

  & > * {
    max-width: 30%;
  }
`;
