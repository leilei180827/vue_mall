import { request } from "./request.js";
export function getMultiData() {
  return request({
    url: "/home/multidata",
  });
}
