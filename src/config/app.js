let env = `prod`;
if (process.env.NODE_ENV === `development`) {
  env = `local`;
}

const envGa = `prod`;
const API_URL = {
  prod: `/`,
  local: `${process.env.REACT_APP_URL_SERVER}/` || `http://localhost:8000/`,
};

const SECRET_GA = {
  prod: ``,
  dev: ``,
  local: ``,
};

const appConstant = {
  API_URL: `${API_URL[env]}api/`,
  AUTHORIZATION: `Authorization`,
  BEARER: `Bearer`,
  TOKEN: `token`,
  REFRESH_TOKEN: `refresh_token`,
  ACCEPT: `Accept`,
  ACCEPT_ENCODING: `Accept-Encoding`,
  MULTIPART_FORM_DATA: `multipart/form-data`,
  APPLICATION_JSON: `application/json`,
  CONTENT_DISPOSITION: `Content-Disposition`,
  ROL: `Rol`,
  SECRET_GA: SECRET_GA[envGa],
  ENV: env,
};

export default appConstant;
