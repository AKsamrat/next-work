import AboutMe from '@/component/AboutMe';
import Contact from '@/component/Contact';
import Education from '@/component/Education';
import Heros from '@/component/Heros';
import Projects from '@/component/Projects';
import Skill from '@/component/Skill';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className=" min-h-screen ">
      <Heros></Heros>
      <AboutMe></AboutMe>
      <Skill></Skill>
      <Projects></Projects>
      <Education></Education>
      <Contact></Contact>
    </main>
  );
}
