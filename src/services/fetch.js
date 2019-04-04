import axios from "axios";
import address from "constants/address";

const config = { headers: { "Content-Type": "multipart/form-data" } };

const post = (query, body) =>
  axios.post(`${address}${query}`, body, config).then(({ data }) => data);

const get = query => axios.post(`${address}${query}`).then(({ data }) => data);

export { post, get };
