import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        { /* About page */}
        <Route path="/about">
          <p>
            hi there
          </p>
          <Link to="/">Home</Link>
        </Route>

        { /* Landing page */}
        <Route path="/">
          <p>
            hi
          </p>
          <Link to="/about">About</Link>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
