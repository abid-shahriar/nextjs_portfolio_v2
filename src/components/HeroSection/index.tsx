import styled from 'styled-components';
import { BsChevronDoubleDown, BsFillEmojiLaughingFill } from 'react-icons/bs';

import { Typography } from '..';
import BackgroundAnimation from './BackgroundAnimation';
import { useAnimation } from '../../hooks/useAnimation';

export default function HeroSection() {
  useAnimation({ suffix: 'hero_' });

  return (
    <StyledSection>
      <BackgroundAnimation />
      <InitialInfo>
        <div>
          <StyledTypo variant="h1" textalign="center" fontSize="4rem" fontWeight="600">
            <span className="hero_animate fadeInUp" style={{ animationDelay: '2s' }}>
              Hello there,
            </span>
            <br />
            <span className="hero_animate fadeInUp" style={{ animationDelay: '2.5s', display: 'inline-block' }}>
              <Typography variant="span" color="var(--color-secondary)">
                Abid Shahriar
              </Typography>{' '}
              here
            </span>
          </StyledTypo>
        </div>

        <div className="hero_animate fadeInUp having-a-good-day" style={{ animationDelay: '2.9s' }}>
          <StyledTypo variant="p" fontSize="3.5rem" textalign="center" margin="2rem 0 3rem">
            Hope you are having a great day!!
          </StyledTypo>
        </div>
        <div className="hero_animate fadeInUp" style={{ animationDelay: '3.2s' }}>
          <BsFillEmojiLaughingFill size="5rem" color="var(--color-secondary)" />
        </div>
      </InitialInfo>

      <DownIcon>
        <BsChevronDoubleDown size="4rem" color="var(--color-secondary)" />
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

  @media (max-width: 768px) {
    margin-top: 4rem;
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

  .having-a-good-day {
    p {
      @media (max-width: 768px) {
        font-size: 2rem;
      }
    }
  }
`;

const StyledTypo = styled(Typography)`
  @media (max-width: 520px) {
    font-size: 3rem;
  }
  @media (max-width: 400px) {
    font-size: 2.5rem;
  }
`;
