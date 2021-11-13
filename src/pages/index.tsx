import Head from 'next/head';
import styled from 'styled-components';
import { HeroSection, Navbar, SkillsSection, Preloader } from '../components';

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />

      <Main>
        <HeroSection />
        <SkillsSection />
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
  margin-top: var(--nav-height);

  @media (max-width: 900px) {
    margin-top: 50px;
  }

  section {
    padding: 0 2.5%;
  }
`;
