import Head from 'next/head';
import styled from 'styled-components';
import { HeroSection, Navbar, SkillsSection, Preloader, ProjectsSection, ContactSection } from '../components';
import AboutMeAndSkills from '../components/AboutMeAndSkills';

export default function Home() {
  return (
    <>
      <Preloader />
      {/* <Navbar /> */}

      <Main>
        <HeroSection />
        <AboutMeAndSkills />
        {/* <SkillsSection /> */}
        <ProjectsSection />
        {/* <ContactSection /> */}
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
  /* margin-top: calc(var(--nav-height) - 1px); */

  /* @media (max-width: 900px) {
    margin-top: 50px;
  } */

  section {
    padding: 5rem 2.5%;
  }
`;
