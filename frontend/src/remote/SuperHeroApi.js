import axios from "axios";
import { URL_API } from "../constants";

export default class SuperHeroApi {
  static callWs(data) {
    return new Promise((resolve, reject) => {
      axios({
        method: data.method,
        url: URL_API + data.url,
        data: data.data ? data.data : {}
      })
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(new Error(err));
        });
    });
  }

  static getSuperheroes(data, cb) {
    SuperHeroApi.callWs({
        method: "get",
        url: `/superheroes?page=${data.page}`
      })
        .then(response => {
          cb(response, null);
        })
        .catch(error => {
          cb(null, error);
        });
  }
  static getTotalSuperheroes(cb) {
    SuperHeroApi.callWs({
        method: "get",
        url: `/superheroes/total`
      })
        .then(response => {
          cb(response, null);
        })
        .catch(error => {
          cb(null, error);
        });
  }
  
  static getSuperHeroe(id, cb) {
    SuperHeroApi.callWs({
         method: "get",
        url: `/superheroes/${id}`
      })
        .then(response => {
          cb(response, null);
        })
        .catch(error => {
          cb(null, error);
        });
  }
}