import { useEffect } from "react";
import NewPost from "../components/NewPost";
import Posts from "../components/Posts";
import ThreeColumnLayout from "../layouts/ThreeColumnLayout";
import { useDispatch } from "react-redux";
import { getTweets } from "../store/actions/tweetActions";

function Feed() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTweets());
  }, []);

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
