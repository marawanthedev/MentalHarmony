import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import BrowseServiceProvider from "./pages/browseServiceProvider/browseServiceProvider";

import "./sass/main.scss";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <Route path="/browseServiceProvider" component={BrowseServiceProvider} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
