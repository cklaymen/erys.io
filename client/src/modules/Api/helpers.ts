import { API_URL } from "src/const";

export function getAbsoluteApiUrl(path: string) {
  return API_URL + path;
}
