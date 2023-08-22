import React from 'react';
import Navigation from './Navigation';

export default function Header({currentPage, handlePageChange}) {
    return (
        <header className='p-5 row justify-content-between'>
          <h1 className='col-4 fw-bold text-white'>
            Xueyin (Sage) Bai
          </h1>
          <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
       </header>
    );
}

