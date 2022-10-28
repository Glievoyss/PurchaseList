import axios from "axios";

let apiInstance = null;
let apiExportIns = null;

axios.defaults.headers.common.Accept = "application/json";

axios.defaults.baseURL = process.env.REACT_APP_BASE_API_URL;

const apiInit = () => {
  if (apiInstance) {
    return apiInstance;
  }
  apiInstance = axios.create({
    timeout: 40000,
    headers: {
      Accept: "application/json",
      "Access-Control-Allow-Origin": `${process.env.REACT_APP_BASE_API_URL}`,
    },
  });

  return apiInstance;
};

const initAuthorized = (token) => {
  apiInstance = axios.create({
    timeout: 40000,
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": `${process.env.REACT_APP_BASE_API_URL}`,
    },
  });

  apiExportIns = axios.create({
    timeout: 40000,

    responseType: "blob",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": `${process.env.REACT_APP_BASE_API_URL}`,
    },
  });

  apiInstance.interceptors.response.use((response) => response, interceptor);
  apiInstance.interceptors.request.use((config) =>
    middlewareApiRequest(config)
  );
};

const getApiInstance = () => apiInstance;

const getExportInstance = () => apiExportIns;

const interceptor = (data) => {
  if (data && data.response && data.response.status === 401) {
    localStorage.removeItem("access_token");
    window.location = "/login";
  }
  return Promise.reject(data);
};

const middlewareApiRequest = (config) => {
  return config;
};

export { apiInit, getApiInstance, initAuthorized, getExportInstance };
