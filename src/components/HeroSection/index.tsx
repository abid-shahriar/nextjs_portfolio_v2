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
          <StyledTypo variant='title' textAlign='center' fontSize='4rem' fontWeight='400'>
            Hello,{' '}
            <Typography variant='span' color='var(--color-secondary)'>
              Abid Shahriar
            </Typography>{' '}
            here
          </StyledTypo>
        </div>
        <div className='wow fadeInUp' data-wow-delay='2.5s'>
          <StyledTypo fontSize='3.5rem' textAlign='center'>
            Full-Stack JavaScript Developer{' '}
          </StyledTypo>
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

const StyledTypo = styled(Typography)`
  @media (max-width: 520px) {
    font-size: 3rem;
  }
  @media (max-width: 400px) {
    font-size: 2.5rem;
  }
`;
