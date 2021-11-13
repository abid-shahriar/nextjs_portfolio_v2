import styled from 'styled-components';
import { Typography } from '..';
import BackgroundAnimation from './BackgroundAnimation';
import SocialIcons from './SocialIcons';

export default function HeroSection() {
  return (
    <StyledSection>
      <BackgroundAnimation />
      <InitialInfo>
        <div className='wow fadeInUp' data-wow-delay='2.2s'>
          <Typography variant='title' textAlign='center' fontSize='4rem' fontWeight='400'>
            Hello,{' '}
            <Typography variant='span' color='var(--color-secondary)'>
              Abid Shahriar
            </Typography>{' '}
            here
          </Typography>
        </div>
        <div className='wow fadeInUp' data-wow-delay='2.5s'>
          <Typography fontSize='3.5rem' textAlign='center'>
            Full-Stack(MERN) Developer{' '}
          </Typography>
        </div>
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
