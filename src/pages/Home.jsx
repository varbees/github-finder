import React from 'react';
import { GiFallingOvoid } from 'react-icons/gi';
import UserResults from '../components/users/UserResults';
import UserSearch from '../components/users/UserSearch';

function Home() {
  return (
    <>
      {/* <GiFallingOvoid className='text-7xl pr-2 inline' />
      <h1 className='text-6xl inline align-middle'> Welcome /_-_\</h1> */}

      {/* todo: search component */}
      <UserSearch />
      <UserResults />
    </>
  );
}

export default Home;
