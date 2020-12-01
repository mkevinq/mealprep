import {
  BrowserRouter as Router,
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
import food0 from './assets/order-page/small-dish.png';
import food1 from './assets/order-page/dish-1.png';
import food2 from './assets/order-page/dish-2.png';
// Don't forget to setyp required CSS!
import "pure-react-carousel/dist/react-carousel.es.css";

function App() {
  return (
    <Router>
      <Switch>
        { /* Search page */}
        <Route path="/search">
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
          <div className = "search-headers">
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
          <div className = "search-headers">
            <h1 id="title">
              <b>On the menu this week</b>
            </h1>
            <hr align="left"></hr>
          </div>

          <div>
            <div className='flex' id='examples'>
              <Card className={"card_example"} title='Butter Chicken' rating={4.9} time={45} calories={450} servings={6} imgsrc={butter_chicken}/> 
              <Card className={"card_example"} title='Lime Chicken Burritos' rating={4.8} time={30} calories={300} servings={8} imgsrc={lime_chicken_burritos}/> 
              <Card className={"card_example"} title='Lime Chicken Burritos' rating={4.9} time={45} calories={450} servings={6} imgsrc={butter_chicken}/> 
            </div>
            <div className='flex' id='examples'>
              <Card className={"card_example"} title='Butter Chicken' rating={4.9} time={45} calories={450} servings={6} imgsrc={butter_chicken}/> 
              <Card className={"card_example"} title='Lime Chicken Burritos' rating={4.8} time={30} calories={300} servings={8} imgsrc={lime_chicken_burritos}/> 
              <Card className={"card_example"} title='Lime Chicken Burritos' rating={4.9} time={45} calories={450} servings={6} imgsrc={butter_chicken}/> 
            </div>
            <div className='flex' id='examples'>
              <Card className={"card_example"} title='Butter Chicken' rating={4.9} time={45} calories={450} servings={6} imgsrc={butter_chicken}/> 
              <Card className={"card_example"} title='Lime Chicken Burritos' rating={4.8} time={30} calories={300} servings={8} imgsrc={lime_chicken_burritos}/> 
              <Card className={"card_example"} title='Lime Chicken Burritos' rating={4.9} time={45} calories={450} servings={6} imgsrc={butter_chicken}/> 
            </div>
          </div>

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

function NavBar() {
  return (
    <div class="navbar flex-center">
      <img id="logo" src={logo} alt="Logo"></img>
      <div class="right flex-center">
        <div class="links flex">
          <Link to="/" style={{textDecoration:"none", color:"#131A2C"}}>
            <p>ABOUT</p>
          </Link>
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
  )
}

export default App;
