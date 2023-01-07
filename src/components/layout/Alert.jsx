import AlertContext from '../../context/alert/AlertContext';
import { useContext } from 'react';

function Alert() {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <p className='flex mb-4 space-x-2 items-center'>
        {alert.type === 'error' && (
          <svg
            fill='none'
            viewBox='0 0 24 24'
            className='w-6 h-6 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              stroke='#B91C1C'
              d='M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636'
            ></path>
          </svg>
        )}
        <span className='flex text-base font-semibold leading-7 text-white'>
          <strong>{alert.msg}</strong>
        </span>
      </p>
    )
  );
}

export default Alert;
