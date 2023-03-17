import React, { createContext, useReducer } from 'react';
import GithubReducer from './GithubReducer';
import PropTypes from 'prop-types';

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //Get initial users list for testing purposes
  // const fetchUsers = async () => {
  //   setLoading();
  //   const res = await fetch(`${GITHUB_URL}/users`, {
  //     headers: {
  //       Authorization: `token ${GITHUB_TOKEN}`,
  //     },
  //   });
  //   const data = await res.json();
  //   dispatch({
  //     type: 'GET_USERS',
  //     payload: data,
  //   });
  // };

  //Get Search results for prod
  const searchUsers = async text => {
    setLoading();
    const params = new URLSearchParams({
      q: text,
    });
    const res = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const { items } = await res.json();
    console.log(items);
    dispatch({
      type: 'GET_USERS',
      payload: items,
    });
  };

  //Get a user data
  const getUser = async login => {
    setLoading();
    const res = await fetch(`${GITHUB_URL}/users/${login}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      dispatch({
        type: 'GET_USER',
        payload: data,
      });
    } else {
      window.location = '/notfound';
    }
  };

  //Get user Repos
  const getUserRepos = async login => {
    setLoading();
    const res = await fetch(`${GITHUB_URL}/users/${login}/repos`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });

    if (res.status === 200) {
      const data = await res.json();
      console.log(data);
      dispatch({
        type: 'GET_USER_REPOS',
        payload: data,
      });
    } else {
      window.location = '/notfound';
    }
  };

  //get userdata from github api?

  const clearUsers = () => dispatch({ type: 'CLEAR_USERS' });

  const clearUser = () => dispatch({ type: 'CLEAR_USER' });

  const setLoading = () => dispatch({ type: 'SET_LOADING' });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        isLoading: state.isLoading,
        //fetchUsers,
        searchUsers,
        clearUsers,
        clearUser,
        getUser,
        getUserRepos,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

GithubContext.propTypes = {
  users: PropTypes.arrayOf(Object),
};

export default GithubContext;
