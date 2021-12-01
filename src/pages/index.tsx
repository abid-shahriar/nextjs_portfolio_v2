import Head from 'next/head';
import styled from 'styled-components';
import { HeroSection, Preloader, ProjectsSection, Footer } from '../components';
import AboutMeAndSkills from '../components/AboutMeAndSkills';

export default function Home() {
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
        <meta name='description' content='Full stack JavaScript developer from Bangladesh' />
        <link rel='shortcut icon' type='image/png' href='/favicon.png' />
      </Head>
    </>
  );
}

const Main = styled.main`
  section {
    padding: 5rem 2.5%;
  }
`;
