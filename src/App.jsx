import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        { /* About page */}
        <Route path="/about">
          <p>
            This is the about page
          </p>
          <Link to="/">Home</Link>
        </Route>

        { /* Landing page */}
        <Route path="/">
          <p>
            This is your API key: {process.env.REACT_APP_SPOONACULAR_APIKEY}
          </p>
          <Link to="/about">About</Link>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
