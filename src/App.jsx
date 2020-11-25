import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Card from './Card.jsx';
import placeholder from "./assets/placeholder_phone.png";
import placeholder2 from "./assets/placeholder_phones.png";
import butter_chicken from "./assets/order-page/recipes-images/butter-chicken.png";
import lime_chicken_burritos from "./assets/order-page/recipes-images/lime-chicken-burrito.png";

function App() {
  return (
    <Router>
      <Switch>
        { /* Search page */}
        <Route path="/search">
          <div className='search'>
            <p>
              This is the search page
            </p>
            <Link to="/">Home</Link>
            <div className='flex'>
              <Card title='Butter Chicken' rating={4.9} time={45} calories={450} servings={6} imgsrc={butter_chicken}/> 
              <Card title='Lime Chicken Burritos' rating={4.8} time={30} calories={300} servings={8} imgsrc={lime_chicken_burritos}/> 
              <Card title='Lime Chicken Burritos' rating={4.9} time={45} calories={450} servings={6} imgsrc={butter_chicken}/> 
            </div>
          </div>
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
