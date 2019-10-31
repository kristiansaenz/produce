

export const initialState = {
  name: '',
  loggedIn: false
};

export const reducer = (state, action) => {
  switch (action.type) {
    case 'login':
      return {
        ...state,
        loggedIn: !state.loggedIn,
        name: action.payload
      };
      
    default:
      return state;
  }
};