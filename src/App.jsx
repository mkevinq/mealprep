import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Card from './Card.jsx';
import CardCarousel from './CardCarousel.js';
import iphone from "./assets/homepage/iphone-preview1.png";
import iphones2 from "./assets/homepage/iphones-preview-2.png";
import butter_chicken from "./assets/order-page/recipes-images/butter-chicken.png";
import lime_chicken_burritos from "./assets/order-page/recipes-images/lime-chicken-burrito.png";
import logo from './assets/navbar/full-logo.svg';
import cart from './assets/navbar/cart.svg';
import account from './assets/navbar/account.svg';
import magnify from './assets/homepage/magnify-icon.svg';
import plan_steps from './assets/homepage/plan-icon.svg';
import delivery from './assets/homepage/delivery-icon.svg';
import food0 from './assets/order-page/small-dish.png';
import food1 from './assets/order-page/dish-1.png';
import food2 from './assets/order-page/dish-2.png';
// Don't forget to setyp required CSS!
import "pure-react-carousel/dist/react-carousel.es.css";

function App() {
  return (
    <Router basename="/">
      <Switch>
        { /* Plan page */}
        <Route path="/plan">
          <NavBar />

          <div className="search">
            <h1 id="search_title">
              Browse Recipes
            </h1>
            <input id="search_bar" placeholder="What are you looking for?">
            </input>
            <img class="floating-food" id="browse-food-0" src={food0} alt=""></img>
            <img class="floating-food" id="browse-food-1" src={food1} alt=""></img>
            <img class="floating-food" id="browse-food-2" src={food2} alt=""></img>
          </div>

          { /* Header */}
          <div className="search-headers">
            <h1 id="title">
              <b>Search Your Favourites</b>
            </h1>
            <hr align="left"></hr>
            <p id="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laboreLorem ipsum dolor sit amet, consectetur.
            </p>
          </div>

          <CardCarousel/>

          { /* Header */}
          <div className="search-headers">
            <h1 id="title">
              <b>On the menu this week</b>
            </h1>
            <hr align="left"></hr>
          </div>

          <div>
            <div className='flex' id='examples'>
              <Card cardType="card-examples" title='Butter Chicken' rating={4.9} time={45} calories={450} servings={6} imgsrc={butter_chicken}/> 
              <Card cardType="card-examples" title='Lime Chicken Burritos' rating={4.8} time={30} calories={300} servings={8} imgsrc={lime_chicken_burritos}/> 
              <Card cardType="card-examples" title='Lime Chicken Burritos' rating={4.9} time={45} calories={450} servings={6} imgsrc={butter_chicken}/> 
            </div>
            <div className='flex' id='examples'>
              <Card cardType="card-examples" title='Butter Chicken' rating={4.9} time={45} calories={450} servings={6} imgsrc={butter_chicken}/> 
              <Card cardType="card-examples" title='Lime Chicken Burritos' rating={4.8} time={30} calories={300} servings={8} imgsrc={lime_chicken_burritos}/> 
              <Card cardType="card-examples" title='Lime Chicken Burritos' rating={4.9} time={45} calories={450} servings={6} imgsrc={butter_chicken}/> 
            </div>
            <div className='flex' id='examples'>
              <Card cardType="card-examples" title='Butter Chicken' rating={4.9} time={45} calories={450} servings={6} imgsrc={butter_chicken}/> 
              <Card cardType="card-examples" title='Lime Chicken Burritos' rating={4.8} time={30} calories={300} servings={8} imgsrc={lime_chicken_burritos}/> 
              <Card cardType="card-examples" title='Lime Chicken Burritos' rating={4.9} time={45} calories={450} servings={6} imgsrc={butter_chicken}/> 
            </div>
          </div>

          <div className= "continer">
            {/* Column 1 */}
            <div className ="col1">
              <h3 className="footer-title">
                Create Healthy Meal Plan
              </h3>
              <hr align="left"></hr>
              <p className="footer-description">
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
              <img id="logo" src={logo} alt="Logo"></img>
            </div>
            <div className ="text-col">
              <div className ="About-col">
                <Link to="/" style={{textDecoration:"none", color:"#131A2C"}}>
                  <p>
                    <strong>
                      About
                    </strong>
                  </p>
                </Link>
              </div>
              <div className="Plan-col">
                <Link to="/plan" style={{textDecoration:"none", color:"#131A2C"}}>
                  <p>
                    <strong>
                      Plan
                    </strong>
                  </p>
                </Link>
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
          <NavBar />

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


          <div className="flex cards">
            <div className="card">
              <img className="card-icon" src={magnify} alt="magnifying glass" height="48"/>
              <h2 className="card-header-1">
                Over 2,000,000+
              </h2>
              <h1 className="card-header-2">
                Browse Recipies
              </h1>
              <div id="lorem_ipsum">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              </div>
            </div>
            <div className="card">
              <img className="card-icon" src={plan_steps} alt="plan" height="48"/>
              <h2 className="card-header-1">
                Healthy &amp; affordable
              </h2>
              <h1 className="card-header-2">
                Create Plan
              </h1>
              <div id="lorem_ipsum2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              </div>
            </div>
            <div className="card">
              <img className="card-icon" src={delivery} alt="delivery truck" height="48"/>
              <h2 className="card-header-1">
                Locally Sourced
              </h2>
              <h1 className="card-header-2">
                Groceries Delivered
              </h1>
              <div id="lorem_ipsum3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              </div>
            </div>
          </div>

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
              <Link to="/plan">
                <button id="plan">
                  Plan
                </button>
              </Link>
            </div>
            <img id="img_right" src={iphone} alt="Phone" width="214" height="430"/>
          </div>

          <div class="highlight" id="highlight2">
            <img id="img_left" src={iphones2} alt="Two Phones" width="455" height="428"/>
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

          <div className= "continer">
            {/* Column 1 */}
            <div className ="col1">
              <h3 className="footer-title">
                Create Healthy Meal Plan
              </h3>
              <hr align="left"></hr>
              <p className="footer-description">
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
              <img id="logo" src={logo} alt="Logo"></img>
            </div>
            <div className ="text-col">
              <div className ="About-col">
                <Link to="/" style={{textDecoration:"none", color:"#131A2C"}}>
                  <p>
                    <strong>
                      About
                    </strong>
                  </p>
                </Link>
              </div>
              <div className="Plan-col">
                <Link to="/plan" style={{textDecoration:"none", color:"#131A2C"}}>
                  <p>
                    <strong>
                      Plan
                    </strong>
                  </p>
                </Link>
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

function NavBar() {
  return (
    <div class="navbar flex-center">
      <img id="logo" src={logo} alt="Logo"></img>
      <div class="right flex-center">
        <div class="links flex">
          <Link to="/" style={{textDecoration:"none", color:"#131A2C"}}>
            <p>ABOUT</p>
          </Link>
          <Link to="/plan" style={{textDecoration:"none", color:"#131A2C"}}>
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
  )
}

export default App;
