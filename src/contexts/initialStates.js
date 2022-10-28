import jwtDecode from "jwt-decode";
import { apiInit, initAuthorized } from "utils/apiClient";

const authInitState = {
  auth: {
    isAuthenticated: false,
    isLogin: false,
    user: {},
    error: undefined,
  },
  user: {
    user: null,
    isLoading: false,
  },
};

if (localStorage.access_token) {
  apiInit();
  const { access_token } = localStorage;
  initAuthorized(access_token);
  const decoded = jwtDecode(access_token);
  authInitState.auth.user = decoded;
  authInitState.auth.isAuthenticated = true;
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    localStorage.removeItem("access_token");
    apiInit(false);
    authInitState.auth.user = {};
    authInitState.auth.isAuthenticated = false;
    window.location.href = "/login";
  }
}

export { authInitState };
