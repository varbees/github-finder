import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import { AiFillCloseCircle } from 'react-icons/ai';

function UserSearch() {
  const [text, setText] = useState('');

  const { users, searchUsers, clearUsers } = useContext(GithubContext);

  const handleChange = e => setText(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (text === '') {
      console.log('type something first!!!');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-200 input input-lg'
                text-black
                placeholder='Search'
                value={text}
                onChange={handleChange}
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none btn btn-lg w-36'
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {users.length > 0 && (
        <div className=''>
          <button onClick={clearUsers}>
            <AiFillCloseCircle className='text-6xl hover:text-accent' />
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
