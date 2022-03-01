import axios from "axios";

let starships_url = "http://127.0.0.1:3000/starships"

function getStarships(take = 12, skip = 0) {
  const url = starships_url + `?take=${take}&skip=${skip}`
  return axios.get(url).then(res => res.data)
}

function createStarship(starship) {
  return axios.post(starships_url, starship)
}

export { getStarships, createStarship }