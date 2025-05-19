import Head from 'next/head';
import { useEffect } from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';
import { HeroSection, Preloader } from '../components'; // Footer, ProjectsSection are now dynamic
// import AboutMeAndSkills from '../components/AboutMeAndSkills'; // Now dynamic

const AboutMeAndSkills = dynamic(() => import('../components/AboutMeAndSkills'));
const Footer = dynamic(() => import('../components/Footer'));

export default function Home() {
  useEffect(() => {
    document.body.style.maxHeight = '100vh';
    document.body.style.overflow = 'hidden';

    setTimeout(() => {
      document.body.style.maxHeight = 'auto';
      document.body.style.overflow = 'auto';
    }, 1999);
  });

  return (
    <>
      <Preloader />

      <Main>
        <HeroSection />
        <AboutMeAndSkills />
      </Main>
      <Footer />

      <Head>
        <title>Abid Shahriar</title>

        <meta name="og:title" content="Abid Shahriar" />
        <meta
          name="description"
          content="I'm a skilled and imaginative full-stack web developer, specializing in crafting immersive digital experiences that captivate and engage users. By harnessing the power of cutting-edge technologies and frameworks like React, Next, and Node.js, I bring visions to life with stunning front-end interfaces and robust back-end solutions. From seamless database management to the integration of RESTful APIs, I ensure that web applications are not only functional but also optimized for peak performance. With a keen eye for detail and a passion for delivering exceptional quality, I am your go-to partner for building the next generation of web applications that leave a lasting impression."
        />
        <meta
          name="og:description"
          content="I'm a skilled and imaginative full-stack web developer, specializing in crafting immersive digital experiences that captivate and engage users. By harnessing the power of cutting-edge technologies and frameworks like React, Next, and Node.js, I bring visions to life with stunning front-end interfaces and robust back-end solutions. From seamless database management to the integration of RESTful APIs, I ensure that web applications are not only functional but also optimized for peak performance. With a keen eye for detail and a passion for delivering exceptional quality, I am your go-to partner for building the next generation of web applications that leave a lasting impression."
        />

        <meta name="google-site-verification" content="WvuWkJC1plzgEA0GhoaYkboJQqy0BCajMuNilv0UE6k" />
      </Head>
    </>
  );
}

const Main = styled.main`
  overflow: hidden;
  section {
    padding: 5rem 2.5%;
  }

  /* *_animate */
  [class*='_animate'] {
    opacity: 0;
    animation-fill-mode: forwards;
  }

  .animate.fadeInUp {
    animation: fadeInUp 1s ease-in-out;
    animation-fill-mode: forwards;
  }

  .animate.fadeIn {
    animation: fadeIn 1s ease-in-out;
    animation-fill-mode: forwards;
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      -webkit-transform: translateZ(0);
      transform: translateZ(0);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
