import React, {useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Footer from "./components/Footer";

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  window.addEventListener("resize", () => setWindowSize(window.innerWidth));

  function contactFormSubmit() {
    alert("Thank You for reaching out. I will respond to your message as soon as possible!");
    window.location.reload();
  }

  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
            <Route exact path={["/", "/about"]}>
                <About windowSize={windowSize}/>
            </Route>
            <Route exact path="/contact">
                <Contact contactFormSubmit={contactFormSubmit}/>
            </Route>
            <Route exact path="/portfolio">
                <Portfolio />
            </Route>
            <Route>
              <About windowSize={windowSize}/>
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
