import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import placeholder from "./assets/placeholder_phone.png";
import placeholder2 from "./assets/placeholder_phones.png";

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

        { /* Test page */}
        <Route path="/test">
          <p>
            This is your API key: {process.env.REACT_APP_SPOONACULAR_APIKEY}
          </p>
          <div>
            <h1>This is a test header</h1>
          </div>
        </Route>

        { /* Landing page */}
        <Route path="/">
          <Landing />

          <Highlight1 />

          <Highlight2 />

        </Route>
      </Switch>
    </Router>
  );
}

function Highlight1() {
  return (
    <div class="highlight" id="highlight1">
      <div id="text_left">
        <h6 id="subtitle">
          1,000,000+ RECIPES
        </h6>
        <h1 id="title">
          <b>Search</b> Your Favourites
        </h1>
        <hr align="left"></hr>
        <p id="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur.
        </p>
        <Link to="/search">
          <button id="plan">
            Plan
          </button>
        </Link>
      </div>
      <img id="img_right" src={placeholder} alt="Phone" width="214" height="430"/>
    </div>
  );
}

function Highlight2() {
  return (
    <div class="highlight" id="highlight2">
      <img id="img_left" src={placeholder2} alt="Two Phones" width="331" height="428"/>
      <div id="text_right">
        <h6 id="subtitle">
          SECTION 2 SUB TITLE
        </h6>
        <h1 id="title">
          Recipe Ingredients <b>Added</b>
        </h1>
        <hr align="left"></hr>
        <p id="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur.
        </p>
        <button id="learn_more2">
          Learn More
        </button>
      </div>
    </div>
  );
}

function Landing() {
  return (
    <div className="landing">
      <h1 id="title">
        Welcome to <b>mealprep.</b>
      </h1>
      <hr align="left"></hr>
      <p id="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur.
      </p>
      <button id="create_plan">
        Create Plan
      </button>
      <button id="learn_more">
        Learn More
      </button>
    </div>
  )
}

export default App;
