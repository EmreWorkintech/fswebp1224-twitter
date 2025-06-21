import { useQuery } from "@tanstack/react-query";
import PostItem from "./PostItem.jsx";
import axios from "axios";

function Posts() {
  const {
    data: posts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: () => {
      return axios.get("https://dummyjson.com/posts").then((res) => {
        return res.data.posts;
      });
    },
    staleTime: 1000 * 10,
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {posts.map((item, index) => (
        <PostItem item={item} key={index} />
      ))}
    </div>
  );
}

export default Posts;
