import React from 'react';
import myResume from '../../assets/Xueyin Bai_Job Title_Resume.pdf';

export default function Resume() {
  return (
    <div>
      <h1 className='fs-2'>Resume</h1>
      <p className='fs-4'>
        Download my <a href={myResume} download>resume</a>
      </p>
      <h2 className='fs-3'>Front-end Proficiencies</h2>
      <ul className='fs-4'>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>React</li>
        <li>Handlebars</li>
        <li>Bootstrap</li>
        <li>Bulma</li>
      </ul>
      <h2 className='fs-3'>Back-end Proficiencies</h2>
      <ul className='fs-4'>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>GraphQL</li>
        <li>AWS</li>
        <li>Webpack</li>
      </ul>
    </div>
  );
}