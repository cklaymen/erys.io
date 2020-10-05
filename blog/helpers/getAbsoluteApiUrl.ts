import { API_URL } from "../const";

function getAbsoluteApiUrl(path: string) {
  return API_URL + path;
}

export default getAbsoluteApiUrl;
