import {
  SET_CURRENT_USER,
  NOT_ENTER_USER,
  SET_USER_LOGOUT,
  NOT_FIND_USER,
} from "contexts/actions/actionTypes";

export default (state, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: Object.keys(action.payload).length !== 0,
        user: action.payload,
        auth: { ...state },
      };
    case NOT_ENTER_USER:
      return {
        ...state,
        auth: { ...state, isLogin: true },
      };
    case NOT_FIND_USER:
      return {
        ...state,
        auth: { ...state, isLogin: true, error: 406 },
      };

    case SET_USER_LOGOUT:
      return {
        ...state,
        auth: {
          ...state,
          isAuthenticated: false,
          isLogin: false,
          user: {},
        },
        user: {
          ...state,
          user: null,
          isLoading: false,
        },
      };

    default:
      return state;
  }
};
