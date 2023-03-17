import React, { createContext, useReducer } from 'react';
import GithubReducer from './GithubReducer';
import PropTypes from 'prop-types';

const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    isLoading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
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
