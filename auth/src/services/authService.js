// src/services/authService.js
import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const login = async (email, password) => {
  return axios.post(`${API_URL}/auth/login`, { email, password });
};

export const getProfile = () => {
  return axios.get(`${API_URL}/user/profile`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  });
};
