import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className='card shadow-md compact side bg-base-100'>
      <div className='flex flex-row items-center space-x-4 card-body hover:bg-gradient-to-r from-teal-900 via-gray-700 to-zinc-700 hover:text-cyan-200'>
        <div>
          <div className='avatar'>
            <div className='rounded-full shadow w-14 h-14 '>
              <img src={avatar_url} alt='profile' />
            </div>
          </div>
        </div>
        <div>
          <h2 className='card-title'>{login}</h2>
          <Link
            className=' text-opacity-40 text-error-content hover:text-cyan-500'
            to={`/user/${login}`}
          >
            {' '}
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
