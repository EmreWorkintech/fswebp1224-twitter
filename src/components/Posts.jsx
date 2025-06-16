import React from "react";
import { useSelector } from "react-redux";
import PostItem from "./PostItem.jsx";

function Posts() {
  const posts = useSelector((store) => store.tweets);
  const loading = useSelector((store) => store.loading);
  const error = useSelector((store) => store.error);

  if (loading) return <p>Loading...</p>;
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
