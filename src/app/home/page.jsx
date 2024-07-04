import AboutMe from '@/component/AboutMe';
import Contact from '@/component/Contact';
import Education from '@/component/Education';
import Footers from '@/component/Footers';
import Heros from '@/component/Heros';
import Projects from '@/component/Projects';
import Skill from '@/component/Skill';
import React from 'react';

const page = () => {
  return (
    <div>
      <Heros></Heros>
      <AboutMe></AboutMe>
      <Skill></Skill>
      <Projects></Projects>
      <Education></Education>
      <Contact></Contact>
    </div>
  );
};

export default page;
