import React, { Suspense, lazy } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/home";
// import Login from "./pages/login/login";
import "./sass/main.scss";
import { ToastContainer, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "./components/spinner/spinner";

function App() {
  const Login = lazy(() => import("pages/login/login"));
  const Signup = lazy(() => import("pages/signup/signup"));
  const BrowseServiceProvider = lazy(
    () => import("pages/browseServiceProvider/browseServiceProvider")
  );
  const Admin = lazy(() => import("./pages/admin/admin"));
  const Student = lazy(() => import("pages/student/student"));
  const ServiceProvider = lazy(
    () => import("pages/serviceProvider/serviceProvider")
  );
  const Profile = lazy(() => import("pages/profile/profile"));

  return (
    <>
      <Router>
        <div className="App">
          <Suspense fallback={<Spinner />}>
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
          </Suspense>
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
