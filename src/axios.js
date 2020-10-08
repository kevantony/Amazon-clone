import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-cl-b446a.cloudfunctions.net/api",
  //"http://localhost:5001/cl-b446a/us-central1/api",
  // the API (cloud function) URL
});
export default instance;
