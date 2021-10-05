import React from "react";
import "./App.css";
import Story from "./pages/story/Story";


import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import { Route, Switch, useLocation } from "react-router-dom";

// background imports
import storyBg from "./assets/images/Layer-7.jpeg";
import homeBg from "./assets/images/bgHome.svg";

const App = () => {
  const [styles, setStyles] = React.useState({});
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === "/story") {
      setStyles({
        backgroundImage: `url(${storyBg})`,
        backgroundRepeat: "repeat-y",
        backgroundSize: "100vw 95vh",
      });
    } else if (location.pathname === "/") {
      setStyles({
        backgroundImage: `url(${homeBg})`,
        height: "100vh",
      });
    }
  }, [location.pathname]);

  return (
    <div style={styles} className="container_main">
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
