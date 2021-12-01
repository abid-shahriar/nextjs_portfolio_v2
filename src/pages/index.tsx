import Head from 'next/head';
import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { HeroSection, Preloader, ProjectsSection, Footer } from '../components';
import AboutMeAndSkills from '../components/AboutMeAndSkills';

export default function Home() {
  const mainRef = useRef<any>(null);

  useEffect(() => {
    mainRef.current.style.height = '0px';

    setTimeout(() => {
      mainRef.current.style.height = 'auto';
    }, 1999);
  });

  return (
    <>
      <Preloader />

      <Main ref={mainRef}>
        <HeroSection />
        <AboutMeAndSkills />
        <ProjectsSection />
      </Main>
      <Footer />

      <Head>
        <title>Abid Shahriar</title>
        <meta
          name='description'
          content='Creative full stack JavaScript Developer with 2.5+ years of experience and have a passion for building responsive, interactive and secure web applications.'
        />
        <meta
          name='og:description'
          content='Creative full stack JavaScript Developer with 2.5+ years of experience and have a passion for building responsive, interactive and secure web applications.'
        />
        <link rel='shortcut icon' type='image/png' href='/favicon.png' />
      </Head>
    </>
  );
}

const Main = styled.main`
  overflow: hidden;
  section {
    padding: 5rem 2.5%;
  }
`;
