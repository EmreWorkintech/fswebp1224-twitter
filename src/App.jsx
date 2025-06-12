import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/"></Route>
        <Route path="/login"></Route>
        <Route path="/feed"></Route>
      </Switch>
    </>
  );
}

export default App;
