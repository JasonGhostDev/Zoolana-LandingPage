import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Story from "./pages/story/Story";
import Home from "./pages/home/Home";
import { Route, Switch, useLocation } from "react-router-dom";

// background imports
import storyBg from "./assets/images/Layer-7.jpeg";
import homeBg from "./assets/images/bgHome.svg";

const App = () => {
  const [bgImage, setBgImage] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/story") {
      setBgImage(storyBg);
    } else if (location.pathname === "/") {
      setBgImage(homeBg);
    }
  }, [location.pathname]);

  return (
    <div
      style={{ backgroundImage: `url(${bgImage})` }}
      className="container_main"
    >
      <Navbar />
      <Switch>
        <Route exact strict path="/">
          <Home />
        </Route>
        <Route exact strict path="/story">
          <Story />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
