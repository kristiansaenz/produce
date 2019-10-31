import React, {createContext, useContext, useReducer} from 'react';

export const UserContext = createContext();

export const UserProvider = ({reducer, initialState, children}) =>(
  <UserContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </UserContext.Provider>
);
export const UserValue = () => useContext(UserContext);