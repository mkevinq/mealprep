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
          </div>

          <Highlight />

        </Route>
      </Switch>
    </Router>
  );
}

function Highlight() {
  return (
    <div class="highlight">
      <div id="text_left">
        <p id="subtitle">
          1,000,000+ RECIPES
        </p>
        <h1 id="title">
          <b>Search</b> Your Favourites
        </h1>
        <hr align="left"></hr>
        <p id="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur.
        </p>
        <button id="green">
          Plan
        </button>
      </div>
      <img id="img_right" src={placeholder} alt="Phone" width="214" height="430"/>
    </div>
  );
}

export default App;
