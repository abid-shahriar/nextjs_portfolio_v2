import Head from 'next/head';
import styled from 'styled-components';
import { HeroSection, Preloader, ProjectsSection } from '../components';
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

      <Head>
        <title>Abid Shahriar</title>
        <meta name='description' content="Abid Shahriar here. I'm a full-stack(MERN) developer from Bangladesh" />
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
