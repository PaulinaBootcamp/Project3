import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//Import Pages
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Assignments from "./pages/Assignments";
import Materials from "./pages/Materials";
import Contact from "./pages/Contact";

//Import Components
import Nav from "./components/Nav";
import NavInstructor from "./components/NavInstructor";
import QuickAccess from "./components/QuickAccess";

function App() {
  return (
    <Router>
      <div>

        <Nav />
        <QuickAccess />
        <NavInstructor />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />


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
