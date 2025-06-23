import axios from "axios";

function createAxiosInstance() {
  const user = localStorage.getItem("user");
  const token = user && user != "null" && JSON.parse(user).accessToken;

  console.log(token);
  return axios.create({
    headers: token && {
      Authorization: token,
    },
    baseURL: "https://dummyjson.com",
  });
}

const API = createAxiosInstance();

export function getPostList() {
  return API.get("/posts").then((res) => {
    return res.data.posts;
  });
}

export const addPost = (postData) => {
  return API.post("/add", postData).then((res) => res.data);
};
