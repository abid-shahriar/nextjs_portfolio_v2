import styled from 'styled-components';
import { Typography } from '..';
import ProjectBox from './ProjectBox';

export default function Projects() {
  return (
    <SectionContainer id='projects'>
      <ProjectsWrapper>
        <ProjectBox
          img='/img/crypto-sphere.jpg'
          title='crypto sphere'
          responsiveness='full responsive'
          stack={['TypeScript', 'NextJS', 'Styled-Components', 'Redux', 'ChartJS', 'RapidApi', 'CoinrankingApi']}
          codeLink='https://github.com/abid-shahriar/crypto-sphere'
          liveLink='https://cryptosphere.vercel.app'
          delay='.5s'
        />
        <ProjectBox
          img='/img/wikiance.jpg'
          title='Wikiance'
          responsiveness='full responsive'
          stack={['TypeScript', 'SCSS', 'NextJS', 'ReactJS', 'Styled-Components', 'React-Icons']}
          codeLink=''
          liveLink='https://wikiance.com'
          delay='.7s'
        />
        <ProjectBox
          img='/img/techiio.jpg'
          title='Techiio'
          responsiveness='partial responsive'
          stack={['ReactJS', 'Redux', 'Styled-Components', 'SCSS', 'semantic-ui-react', 'React-PDF']}
          codeLink=''
          liveLink='https://techiio.com'
          delay='.9s'
        />
        <ProjectBox
          img='/img/eevee.jpg'
          title='Eevee'
          responsiveness='partial responsive'
          stack={['TypeScript', 'SCSS', 'NextJS', 'ReactJS', 'Styled-Components', 'WowJS']}
          codeLink=''
          liveLink='https://eevee.to'
          delay='1.1s'
        />
        <ProjectBox
          img='/img/food-o-clock.jpg'
          title="food o'Clock"
          responsiveness='full responsive'
          stack={['HTML', 'CSS', 'SCSS', 'JavaScript']}
          codeLink='https://github.com/abid-shahriar/restaurant-website'
          liveLink='https://abid-shahriar.github.io/restaurant-website/'
          delay='1.3s'
        />
        <ProjectBox
          img='/img/memory-game.jpg'
          title='Memory Game'
          responsiveness='full responsive'
          stack={['ReactJS', 'TailwindCSS', 'TypeScript']}
          codeLink='https://github.com/abid-shahriar/memory-game'
          liveLink='https://memory123.netlify.app'
          delay='1.5s'
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
