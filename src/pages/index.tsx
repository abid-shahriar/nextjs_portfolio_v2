import Head from 'next/head';
import { HeroSection, Navbar, SkillsSection } from '../components';

export default function Home() {
  return (
    <>
      <HeroSection />
      <Navbar />
      <SkillsSection />
    </>
  );
}
