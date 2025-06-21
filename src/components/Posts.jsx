import PostItem from "./PostItem.jsx";
import { usePosts } from "../services/queries.js";

function Posts() {
  const { data: posts, isLoading, error } = usePosts();

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
