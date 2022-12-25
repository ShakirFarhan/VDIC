import axios from "axios";
const url = "http://localhost:5000";
export const registerUser = async (body) => {
  try {
    return await axios.post(`${url}/register`, body);
  } catch (error) {
    console.log("error in register api");
  }
};
