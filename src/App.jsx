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
        { /* Search page */}
        <Route path="/search">
          <p>
            This is the search page
          </p>
          <Link to="/">Home</Link>
        </Route>

        { /* Landing page */}
        <Route path="/">
          <p>
            This is your API key: {process.env.REACT_APP_SPOONACULAR_APIKEY}
          </p>
          <Link to="/search">Plan</Link>

          <div>
            <h1>This is a test header</h1>
          </div>

        </Route>
      </Switch>
    </Router>
  );
}

export default App;
