import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import Pages
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Assignments from "./pages/Assignments";
import Materials from "./pages/Materials";
import Contact from "./pages/Contact";
import Unit from "./pages/Units";

//Import Components
import Nav from "./components/Nav";
import NavInstructor from "./components/NavInstructor";
import QuickAccess from "./components/QuickAccess";
import Modal from "./components/Modal";

function App() {
  return (
    <Router>
      <div>

        <Nav />
        <QuickAccess />
        <Modal />
        <NavInstructor />
        <Switch>
          <Route exact path="/" component={Unit} />
          <Route exact path="/units" component={Unit} />
          <Route exact path="/units/:id" component={Detail} />


          <Route exact path="/assignments" component={Assignments} />
          <Route exact path="/materials" component={Materials} />
          <Route path="/contact" component={Contact} />
          <Route component={NoMatch} />
        </Switch>


      </div>

    </Router>
  );
}

export default App;
