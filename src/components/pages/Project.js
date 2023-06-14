import React from 'react';
import githubIcon from '../../assets/images/githubIcon.png';
//project images
import voteForMe from '../../assets/images/voteForMe.png';
import babyName from '../../assets/images/babyName.jpg';
import textEditor from '../../assets/images/textEditor.png';
import noteTaker from '../../assets/images/noteTaker.jpg';
import weatherDashboard from '../../assets/images/weather.jpg';
import workdayScheduler from '../../assets/images/scheduler.jpg';


export default function Project() {
  const projects = [
    {
      imgUrl: voteForMe,
      appUrl: 'https://election-pro.herokuapp.com/',
      githubUrl: 'https://github.com/danieltran2016/Elections',
      appName: 'Vote for Me!',
      appTech: 'Full-stack Application Using ExpressJs and MySQL',
    },
    {
      imgUrl: babyName,
      appUrl: 'https://xybai0103.github.io/babyNameApp/',
      githubUrl: 'https://github.com/xybai0103/babyNameApp',
      appName: 'Baby Name',
      appTech: 'Front-end Application Using jQuery and Third-party APIs',
    },
    {
      imgUrl: textEditor,
      appUrl: 'https://pwa-text-editor01.herokuapp.com/',
      githubUrl: 'https://github.com/xybai0103/PWA-textEditor',
      appName: 'Text Editor',
      appTech: 'Progressive Web Application (PWA) Using IndexedDB',
    },
    {
      imgUrl: noteTaker,
      appUrl: 'https://notetaker-express.herokuapp.com/',
      githubUrl: 'https://github.com/xybai0103/express.js-noteTaker#technologies',
      appName: 'Note Taker',
      appTech: 'Full-stack Application Using ExpressJs',
    },
    {
      imgUrl: weatherDashboard,
      appUrl: 'https://xybai0103.github.io/serverSideAPIs-weatherDashboard/',
      githubUrl: 'https://github.com/xybai0103/serverSideAPIs-weatherDashboard',
      appName: 'Weather dashboard',
      appTech: 'Full-stack Application Using jQuery and Third-party APIs',
    },
    {
      imgUrl: workdayScheduler,
      appUrl: 'https://xybai0103.github.io/thirdPartyAPIs-workDayScheduler/',
      githubUrl: 'https://github.com/xybai0103/thirdPartyAPIs-workDayScheduler',
      appName: 'Workday Scheduler',
      appTech: 'Front-end Application Using jQuery',
    },
  ];

  return (
    <div>
      <h1>Portfolio</h1>
      <div className='projects'>
        {projects.map((project, index)=>(
          <ProjectItem key={index} project={project}/>
        ))}

      </div>
    </div>
  );
}

function ProjectItem ({ project }) {
  const { imgUrl, appUrl, githubUrl, appName, appTech } = project;

  return (
    <figure className='app-container'>
      <img className='app-img' src={imgUrl} alt={appName}/>
      <figcaption className='app-info'>
        <div className='app-name'>
          <a href={appUrl} target='_blank' rel='noopener noreferrer'>{appName}</a>
        </div>
        <div className='app-github'>
          <a href={githubUrl} target="_blank" rel='noopener noreferrer'>
            <img src={githubIcon} alt='Github' />
          </a>
        </div>
        <div className='app-tech'>{appTech}</div>
      </figcaption>
    </figure>
  );
}

// export default function Project() {
//   return (
//     <div>
//       <h1>Portfolio</h1>
//       <div className='projects'>
//         <figure className='app-container'>
//           <img className='app-img' src='../../../public/images/voteForMe.png' alt='voteForMe'/>
//           <figcaption className='app-info'>
//             <div className='app-name'>
//               <a href='https://election-pro.herokuapp.com/' target='_blank' rel='noopener noreferrer'>Vote for Me!</a>
//             </div>
//             <div className='app-github'>
//               <a href='https://github.com/danieltran2016/Elections' target="_blank" rel='noopener noreferrer'>
//                 <img src='../../../public/images/githubIcon.png' alt='Github' />
//               </a>
//             </div>
//             <div className='app-tech'>Full-Stack Application Using ExpressJs and MySQL</div>
//           </figcaption>
//        </figure>
//       </div>
//     </div>
//   );
// }