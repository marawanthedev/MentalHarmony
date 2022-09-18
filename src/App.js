import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/home.jsx";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import BrowseServiceProvider from "./pages/browseServiceProvider/browseServiceProvider";
import Admin from "./pages/admin/admin";
import Student from "./pages/student/student";
import ServiceProvider from "./pages/serviceProvider/serviceProvider";
import Profile from "./pages/profile/profile";
import "./sass/main.scss";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route
              path="/browseServiceProvider"
              component={BrowseServiceProvider}
            />
            <Route path="/profile" component={Profile} />
            <Route path="/admin/dashboard" component={Admin} />
            <Route path="/student/dashboard" component={Student} />
            <Route
              path="/serviceprovider/dashboard"
              component={ServiceProvider}
            />
          </Switch>
          {/* <Footer /> */}
        </div>
      </Router>
      <ToastContainer
        draggable={false}
        transition={Zoom}
        autoClose={4000}
        limit={2}
      />
    </>
  );
}

export default App;
