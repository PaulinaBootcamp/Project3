import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Col, Row, Container } from "./components//Grid";

//Import Pages
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Assignments from "./pages/Assignments";
import MaterialsStudent from "./pages/MaterialsStudent";
import Materials from "./pages/Materials";
import Contact from "./pages/Contact";
import Unit from "./pages/Units";

//Import Components
import Nav from "./components/Nav";
import NavInstructor from "./components/NavInstructor";
import NavStudent from "./components/NavStudent";
import QuickAccess from "./components/QuickAccess";
import QuickAccessPublic from "./components/QuickAccessPublic";
import AddUnitModal from "./components/AddUnitModal";


import API from "./utils/API";


class App extends React.Component {

  state = {
    currentUser: undefined
  }

  handleLogin = (email, password) => {
    API.authUser(email, password)
      .then(resp => this.setState({ currentUser: resp.data }))
      .catch(() => console.log("Wrong password!"));
  }

  handleLogout = () => {
    this.setState({ currentUser: undefined });
  }

  render() {
    if (this.state.currentUser === undefined) {
     return (
        // <div>
        //   <Nav
        //     user={this.state.currentUser}
        //     onLogin={this.handleLogin}
        //     onLogout={this.handleLogout}
        //   />
        //   <Router>
        //     <div>
        //       <QuickAccessPublic />
             
                             
        //     </div>
        //   </Router>
        // </div>

         <div>
          <Nav
            user={this.state.currentUser}
            onLogin={this.handleLogin}
            onLogout={this.handleLogout}
          />

          <Router>
            <div>
              <QuickAccess />
              <NavStudent />
              <Switch>
                <Route exact path="/" component={Unit} />
                <Route exact path="/units" component={Unit} />
                <Route exact path="/units/:id" component={Detail} />
                <Route exact path="/assignments" component={Assignments} />
                <Route exact path="/materials" component={MaterialsStudent} />
                <Route path="/contact" component={Contact} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </Router>
        </div>
      )
    }


    else {    if (this.state.currentUser && !this.state.currentUser.isStudent) {
      return (
        <div>
          <Nav
            user={this.state.currentUser}
            onLogin={this.handleLogin}
            onLogout={this.handleLogout}
          />
          <Router>
            <div>
              <QuickAccess />
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
        </div>
      )
    }


    else {
      return (
        <div>
          <Nav
            user={this.state.currentUser}
            onLogin={this.handleLogin}
            onLogout={this.handleLogout}
          />

          <Router>
            <div>
              <QuickAccess />
              <NavStudent />
              <Switch>
                <Route exact path="/" component={Unit} />
                <Route exact path="/units" component={Unit} />
                <Route exact path="/units/:id" component={Detail} />
                <Route exact path="/assignments" component={Assignments} />
                <Route exact path="/materials" component={MaterialsStudent} />
                <Route path="/contact" component={Contact} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </Router>
        </div>
      );
    }
  }
}
}

export default App;
