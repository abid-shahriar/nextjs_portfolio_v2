import styled from 'styled-components';
import { Typography } from '..';
import BackgroundAnimation from './BackgroundAnimation';
import SocialIcons from './SocialIcons';

export default function HeroSection() {
  return (
    <StyledSection>
      <BackgroundAnimation />
      <InitialInfo>
        <Typography variant='title' textAlign='center' fontSize='4rem' fontWeight='400'>
          Hello,{' '}
          <Typography variant='span' color='var(--color-secondary)'>
            Abid Shahriar
          </Typography>{' '}
          here
        </Typography>

        <Typography fontSize='3.5rem' textAlign='center'>
          Full-Stack(MERN) Developer from Bangladesh{' '}
        </Typography>
      </InitialInfo>

      <SocialIcons />
    </StyledSection>
  );
}

const InitialInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const StyledSection = styled.section`
  overflow: hidden;
  position: relative;
  background-color: var(--bg-dark);
  height: calc(100vh - var(--nav-height));
  isolation: isolate;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
