import axios from "axios";

export const GET_TWEETS_LOADING = "GET_TWEETS_LOADING";
export const GET_TWEETS_SUCCESS = "GET_TWEETS_SUCCESS";
export const GET_TWEETS_ERROR = "GET_TWEETS_ERROR";

/*
export function getTweets() {
  return function (dispatch) {
    dispatch({ type: GET_TWEETS_LOADING });
    axios
      .get("https://dummyjson.com/posts")
      .then((res) => {
        dispatch({ type: GET_TWEETS_SUCCESS, payload: res.data.posts });
      })
      .catch((error) => {
        dispatch({ type: GET_TWEETS_ERROR, payload: error.message });
      });
  };
}
  */

export const getTweets = () => (dispatch) => {
  dispatch({ type: GET_TWEETS_LOADING });
  axios
    .get("https://dummyjson.com/posts")
    .then((res) => {
      dispatch({ type: GET_TWEETS_SUCCESS, payload: res.data.posts });
    })
    .catch((error) => {
      dispatch({ type: GET_TWEETS_ERROR, payload: error.message });
    });
};
