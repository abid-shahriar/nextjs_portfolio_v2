import { useEffect, useRef } from 'react';
import styled from 'styled-components';

export default function Preloader() {
  const preloaderRef = useRef<HTMLDivElement | null>(null);

  function rocketFly() {
    let counter = 20;
    let i = 0;

    while (i < counter) {
      let stars = document.createElement('i');
      let positionX = Math.floor(Math.random() * window.innerWidth);

      let duration = Math.random() * 2;
      let height = Math.random() * 100;

      stars.style.left = `${positionX}px`;
      stars.style.width = `1px`;
      stars.style.height = `${height}px`;
      stars.style.animationDuration = `${duration}s`;

      preloaderRef?.current?.appendChild(stars);

      i++;
    }
  }

  function preLoader() {
    setTimeout(() => {
      preloaderRef.current?.classList.add('hide');
    }, 2000);
  }

  useEffect(() => {
    rocketFly();
    preLoader();
  }, []);

  return (
    <PreloaderContainer ref={preloaderRef}>
      <RocketWrapper>
        <img src='/img/rocket.svg' alt='rocket' />
      </RocketWrapper>
    </PreloaderContainer>
  );
}

const PreloaderContainer = styled.div`
  position: fixed;
  height: 100vh;
  width: 100%;
  top: 0;
  background: black;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
  transition: 0.5s;

  i {
    position: absolute;
    background-color: white;
    top: -250px;
    animation: star-fly 5s linear infinite;
  }

  @keyframes star-fly {
    0% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(150vh);
    }
  }

  &.hide {
    height: 0;
    overflow: hidden;
  }
`;

const RocketWrapper = styled.div`
  height: 250px;
  position: relative;
  animation: rocket-fly 1.5s linear infinite;
  z-index: 100;

  &:before,
  &::after {
    content: '';
    position: absolute;
    height: 200px;
    width: 30px;
    background: linear-gradient(to bottom, #00b7ff, transparent);
    bottom: 0;
    top: 72%;
    left: 50%;
    transform: translateX(-50%);
  }

  &::before {
    filter: blur(5px);
  }

  &::after {
    filter: blur(50px);
  }

  & img {
    position: relative;
    height: 100%;
    z-index: 100;
  }

  @media screen and (max-width: 587px) {
    & {
      height: 120px;
    }
    &:before,
    &::after {
      height: 150px;
      width: 25px;
    }
  }

  @keyframes rocket-fly {
    0%,
    100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-9px);
    }
  }
`;
