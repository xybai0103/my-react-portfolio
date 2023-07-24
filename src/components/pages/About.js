import React from 'react';
import avatar from '../../assets/images/headshot.jpeg';

export default function About() {
  return (
    <div>
      <h1 className='fs-2'>Hello, Stranger!</h1>
      <img className="avatar mt-1 mb-3" src={avatar} alt="Xueyin's Avatar"/>
      <div className='fs-3'>
        <p>
          My career journey has been an exciting exploration of various disciplines, starting from landscape design and urban research to the current coding. For me, this path feels like a natural and logical progression, driven by a deep alignment with my skills, passions, and long-term aspirations.
        </p>
        <p>
          As a full-stack web developer, I use Node and Express for the back end, while managing data with MySQL, MongoDB, and GraphQL. On the front end, React is my tool of choice for data fetching and state management. My background in landscape design has instilled in me a sensitivity to user experience and a skill to visualize project requirements quickly, ensuring alignment with stakeholders' needs.
        </p>
        <p>
          Years of rigorous research have honed my ability to break down complex tasks into manageable components, designing efficient workflows that optimize project outcomes. Working collaboratively with multi-disciplinary teams, I embrace the value of agile methodologies in delivering successful projects.
        </p>
        <p>
          I aspire to write clean, maintainable, and efficient code that resonates with users on both aesthetic and functional levels, and I always seek opportunities to learn new skills and expand my knowledge. In my journey, I hold a simple motto close to my heart: leverage my natural strengths, explore new potentials, and relish the ever-changing landscape of the tech world.
        </p>
      </div>
    </div>
  );
}