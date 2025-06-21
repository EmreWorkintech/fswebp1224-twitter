import NewPost from "../components/NewPost";
import Posts from "../components/Posts";
import ThreeColumnLayout from "../layouts/ThreeColumnLayout";

function Feed() {
  return (
    <ThreeColumnLayout>
      <div className="px-4 py-8 font-bold text-xl">
        <h1>Home</h1>
      </div>
      <NewPost />
      <Posts />
    </ThreeColumnLayout>
  );
}

export default Feed;
