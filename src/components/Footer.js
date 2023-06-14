import React from 'react';
import githubIcon from '../assets/images/githubIcon.png';
import linkedInIcon from '../assets/images/linkedInIcon.png';
import stackOverflowIcon from '../assets/images/stackOverflowIcon.png';


export default function Footer () {
    return(
      <div>
        <a href='https://github.com/xybai0103' target='_blank' rel='noopener noreferrer'>
          <img src={githubIcon} alt='Github'/>
        </a>
        <a href='https://www.linkedin.com/in/xueyin-bai-454a53182/' target='_blank' rel='noopener noreferrer'>
          <img src={linkedInIcon} alt='LinkedIn'/>
        </a>
        <a href='https://stackoverflow.com/users/20961987/xybai0103?tab=profile' target='_blank' rel='noopener noreferrer'>
          <img src={stackOverflowIcon} alt='Stack Overflow'/>
        </a>
      </div>
    )
}