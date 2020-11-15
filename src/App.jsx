import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import placeholder from "./assets/placeholder_phone.png";

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
            <Highlight />
          </div>

        </Route>
      </Switch>
    </Router>
  );
}

function Highlight() {
  return (
    <div class="highlight">
      <img id="right" src={placeholder} alt="Phone" width="214" height="430"/>
      <p id="hard">
        1,000,000+ RECIPES
      </p>
      <h4>
        <b>Search</b> Your Favourites
      </h4>
      <p id="soft">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur.
      </p>
      <button id="green">
        Plan
      </button>
    </div>
  );
}

export default App;
