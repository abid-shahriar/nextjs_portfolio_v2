import Head from 'next/head';
import { useEffect } from 'react';
import styled from 'styled-components';
import { HeroSection, Preloader, ProjectsSection, Footer } from '../components';
import AboutMeAndSkills from '../components/AboutMeAndSkills';

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
        <ProjectsSection />
      </Main>
      <Footer />

      <Head>
        <title>Abid Shahriar</title>
        <meta
          name='description'
          content='Creative full stack JavaScript Developer from Bangladesh. Skilled in building responsive, interactive and secure web applications.'
        />
        <meta
          name='og:description'
          content='Creative full stack JavaScript Developer from Bangladesh. Skilled in building responsive, interactive and secure web applications.'
        />
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
