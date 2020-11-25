import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import placeholder from "./assets/placeholder_phone.png";
import placeholder2 from "./assets/placeholder_phones.png";
import logo from './assets/navbar/full-logo.svg';
import cart from './assets/navbar/cart.svg';
import account from './assets/navbar/account.svg';

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
          <div class="navbar flex-center">
            <img id="logo" src={logo} alt="Logo"></img>
            <div class="right flex-center">
              <div class="links flex">
                <p>ABOUT</p>
                <Link to="/search" style={{textDecoration:"none", color:"#131A2C"}}>
                  <p>PLAN</p>
                </Link>
                <p>ORDER</p>
              </div>
              <div class="icon-nav flex">
                <img id="cart-svg" src={cart} alt="Cart"></img>
                <div class="separator"></div>
                <img id="account-svg" src={account} alt="Account"></img>
              </div>
            </div>
          </div>

          <Landing />

          <Highlight1 />

          <Highlight2 />

          <div className= "continer">
            {/* Column 1 */}
            <div className ="col1">
              <h3>
                Create Healthy Meal Plan
              </h3>
              <hr className ="line"></hr>
              <p>
                Lorm ipsum dolor amet, consectetur adipiscing elit, <br></br>
                sed do eiusmod tempor inciddunt ut labore
              </p>
            </div>
            {/* Column 2 */}
            <div className ="col2">
              <button className="browse">Browse</button>
            </div>
        </div>

          <div className="container2">
            <div className ="icon-col">
              <h6>
                <strong>
                  mealprep.
                </strong>
              </h6>
            </div>
            <div className ="text-col">
              <div className ="About-col">
                <p>
                  <strong>
                    About
                  </strong>
                </p>
              </div>
              <div className="Plan-col">
                <p>
                  <strong>
                    Plan
                  </strong>
                </p>
              </div>
              <div className="Order-col">
                <p>
                  <strong>
                    Order
                  </strong>
                </p>
              </div>
            </div>
          </div>


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
