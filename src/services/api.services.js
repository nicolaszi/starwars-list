export default class ApiService {
    constructor() {}
   
    getStarships(url) {
      return fetch(url)
    }
  }