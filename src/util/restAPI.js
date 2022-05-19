// East HTTP library

// library for making http requests
// @version 2.0.0
// @author Marwan Mostafa
// using es6 ,fecthing and arrow fucntions
import axios from "axios";
const userInAuth =
  localStorage.getItem("user") !== undefined
    ? JSON.parse(localStorage.getItem("user"))
    : null;
const headers = {
  "Content-type": "application/json",
  authorization: userInAuth ? `Bearer ${userInAuth.token}` : null,
};

class EasyAxios {
  // make a http get request
  async get(url) {
    const res = await axios.get(url, {
      headers,
    });
    return res;
  }

  // make a http post request
  async post(url, data) {
    const res = await axios.post(url, data, { headers });
    return res;
  }

  // Make an http PUT Request
  async put(url, data) {
    const res = await axios.put(url, data, { headers });
    return res;
  }
  // delete request
  async delete(url) {
    const res = await axios.delete(url, { headers });
    return res;
  }
}

export const http = new EasyAxios();
