import React, { useEffect } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Testimonials from "./components/Testimonials";
import scrollreveal from "scrollreveal";
import Camping from "./components/adventures/specificpage/Camping";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hiking from "./components/adventures/specificpage/Hiking";
import CliffJumping from "./components/adventures/specificpage/CliffJumping";
import MountainBiking from "./components/adventures/specificpage/MountainBiking";
import ZipLining from "./components/adventures/specificpage/ZipLining";
import SkyDiving from "./components/adventures/specificpage/SkyDiving";
import SignIn from "./components/SignIn";
import Adventures from "./components/adventures/Adventures";
export default function App() {
  useEffect(() => {
    const sr = scrollreveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    sr.reveal(
      `
        #adventures,
        #testimonials
        `,
      {
        opacity: 0,
        interval: 300,
      },
    );
  }, []);
  return (
    <Router>
      <Switch>
        <Route path="/Adventures" component={Adventures}></Route>
        <Route path="/Camping" component={Camping}></Route>
        <Route path="/Hiking" component={Hiking}></Route>
        <Route path="/CliffJumping" component={CliffJumping}></Route>
        <Route path="/MountainBiking" component={MountainBiking}></Route>
        <Route path="/ZipLining" component={ZipLining}></Route>
        <Route path="/SkyDiving" component={SkyDiving}></Route>
        <Route path="/Testimonials" component={Testimonials}></Route>
      </Switch>
      {/* <SignIn /> */}
      <ScrollToTop />
    </Router>
  );
}
