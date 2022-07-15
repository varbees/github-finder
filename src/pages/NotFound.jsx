import React from 'react';
import { GiDividedSpiral } from 'react-icons/gi';

function NotFound() {
  return (
    <div className='text-center'>
      <GiDividedSpiral className='text-7xl pr-2 mx-auto text-accent-focus' />
      <h1 className='text-6xl mb-4 align-middle text-accent'>
        Lost in the <strong className='text-error'>Void</strong>
      </h1>
    </div>
  );
}

export default NotFound;
