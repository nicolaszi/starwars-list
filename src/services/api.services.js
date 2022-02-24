export default class ApiService {
    constructor() {}
   
    getStarships(url) {
      return fetch(url)
    }
}

// getStarships(url) {
//   return fetch(url)
// }

// export { getStarships }