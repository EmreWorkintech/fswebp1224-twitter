import {
  GET_TWEETS_ERROR,
  GET_TWEETS_LOADING,
  GET_TWEETS_SUCCESS,
} from "../actions/tweetActions";

const initalState = {
  tweets: [],
  loading: false,
  error: "",
};

export function tweetReducer(state = initalState, action) {
  switch (action.type) {
    case GET_TWEETS_SUCCESS:
      return { ...state, tweets: action.payload, loading: false, error: "" };
    case GET_TWEETS_ERROR:
      return { ...state, loading: false, error: action.payload };
    case GET_TWEETS_LOADING:
      return { ...state, loading: true, error: "" };
    default:
      return state;
  }
}
