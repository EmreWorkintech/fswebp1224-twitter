import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";

function ProtectedRoute({ children, ...rest }) {
  const user = localStorage.getItem("user");
  const token = user && user != "null" && JSON.parse(user).accessToken;

  return <Route {...rest}>{token ? children : <Redirect to="/login" />}</Route>;
}

export default ProtectedRoute;
