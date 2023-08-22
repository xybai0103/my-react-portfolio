import React from 'react';

function Navigation({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-pills nav-fill col-8 fs-4 fw-bold">
      <li className="nav-item mx-5">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={currentPage === 'About' ? 'nav-link active bg-black' : 'nav-link text-white'}
        >
          About me
        </a>
      </li>
      <li className="nav-item mx-5">
        <a
          href="#project"
          onClick={() => handlePageChange('Project')}
          className={currentPage === 'Project' ? 'nav-link active bg-black' : 'nav-link text-white'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item mx-5">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active bg-black' : 'nav-link text-white'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item mx-5">
        <a
          href="#resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active bg-black' : 'nav-link text-white'}
        >
          Resume
        </a>
      </li>
    </ul>
  );
}

export default Navigation;
