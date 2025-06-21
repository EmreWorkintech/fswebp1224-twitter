import axios from "axios";

export function getPostList() {
  return axios.get("https://dummyjson.com/posts").then((res) => {
    return res.data.posts;
  });
}

export const addPost = (postData) => {
  return axios
    .post("https://dummyjson.com/posts/add", postData)
    .then((res) => res.data);
};
