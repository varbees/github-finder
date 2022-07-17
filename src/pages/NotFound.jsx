import React from 'react';
import { Link } from 'react-router-dom';
import { GiDividedSpiral } from 'react-icons/gi';
import { GoHome } from 'react-icons/go';

function NotFound() {
  return (
    <div className='text-center'>
      <GiDividedSpiral className='text-9xl pr-2 mx-auto mb-5 text-accent-focus' />
      <h1 className='text-6xl mb-8 align-middle text-accent'>
        Lost in the <strong className='text-warning'>Void</strong>
      </h1>
      <Link to='/' className='btn btn-neutral btn-lg hover:text-accent'>
        <GoHome className='mr-2' />
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
