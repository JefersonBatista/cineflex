import axios from "axios";

const BASE_URL = "https://mock-api.driven.com.br/api/v4/cineflex";

function getMovies() {
  return axios.get(`${BASE_URL}/movies`);
}

function getShowtimes(movieId) {
  return axios.get(`${BASE_URL}/movies/${movieId}/showtimes`);
}

function getShowtime(sessionId) {
  return axios.get(`${BASE_URL}/showtimes/${sessionId}/seats`);
}

function makeTicketsRequest(ticketsRequest) {
  return axios.post(`${BASE_URL}/seats/book-many`, ticketsRequest);
}

export { getMovies, getShowtimes, getShowtime, makeTicketsRequest };
