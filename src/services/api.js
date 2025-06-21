import axios from "axios";

export function getPostList() {
  return axios.get("https://dummyjson.com/posts").then((res) => {
    return res.data.posts;
  });
}
