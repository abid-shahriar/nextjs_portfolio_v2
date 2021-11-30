import styled from 'styled-components';
import { BsChevronDoubleDown } from 'react-icons/bs';

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
            Hello there,{' '}
          </StyledTypo>
          <StyledTypo variant='title' textAlign='center' fontSize='4rem' fontWeight='400'>
            <Typography variant='span' color='var(--color-secondary)'>
              Abid Shahriar
            </Typography>{' '}
            here
          </StyledTypo>
        </div>
        <div className='wow fadeInUp' data-wow-delay='2.5s'>
          <StyledTypo fontSize='3.5rem' textAlign='center'>
            I&apos;m a full stack JavaScript Developer{' '}
          </StyledTypo>
        </div>
      </InitialInfo>

      <SocialIcons />

      <DownIcon>
        <BsChevronDoubleDown size='4rem' color='var(--color-secondary)' />
      </DownIcon>
    </StyledSection>
  );
}

const DownIcon = styled.div`
  position: absolute;
  bottom: 4rem;
  opacity: 0.7;

  & > * {
    animation: downAnimation 3.5s infinite ease-in-out;
  }

  @keyframes downAnimation {
    0% {
      transform: translateY(-2rem);
    }
    50% {
      transform: translateY(2rem);
    }

    100% {
      transform: translateY(-2rem);
    }
  }
`;

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
