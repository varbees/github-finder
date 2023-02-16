import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/GithubContext';
import AlertContext from '../../context/alert/AlertContext';
import { AiFillCloseCircle } from 'react-icons/ai';

function UserSearch() {
  const [text, setText] = useState('');

  const { users, searchUsers, clearUsers } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = e => setText(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    if (text === '') {
      // console.log();
      setAlert('Type a name in the search box', 'error');
    } else {
      searchUsers(text);
      setText('');
    }
  };

  return (
    <div className='grid grid-flow-col xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8 '>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control col-span-3'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
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
        <div className=' flex justify-start align-middle col-span-1'>
          <button onClick={clearUsers}>
            <AiFillCloseCircle className='text-6xl hover:text-accent' />
          </button>
        </div>
      )}
    </div>
  );
}

export default UserSearch;
