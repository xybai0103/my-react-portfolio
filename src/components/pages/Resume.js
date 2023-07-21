import React from 'react';
import myResume from '../../assets/Xueyin Bai_Job Title_Resume.pdf';

export default function Resume() {
  return (
    <div>
      <h1 className='fs-2'>Resume</h1>
      <p>
        Download my <a href={myResume} download>resume</a>
      </p>
      <h2 className='fs-4'>Front-end Proficiencies</h2>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>JQuery</li>
        <li>responsive design</li>
        <li>React</li>
        <li>Bootstrap</li>
      </ul>
      <h2 className='fs-4'>Back-end Proficiencies</h2>
      <ul>
        <li>APIs</li>
        <li>Node</li>
        <li>Express</li>
        <li>MySQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>REST</li>
        <li>GraphQL</li>
      </ul>
    </div>
  );
}