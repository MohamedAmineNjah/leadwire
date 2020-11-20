import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Usertab from "./tab/Usertab";
import ModUser from "./Modifier/ModUser";
import DetailUser from "./Details/DetailUser";
import DetailComment from "./Details/DetailComment";
import "bootstrap/dist/css/bootstrap.min.css";


function App(props) {
  return (
    <Router>
      <div className="App">

        <Switch>
          <Route exact path="/" component={Usertab} />
          <Route exact path="/users/edit/:id" component={ModUser} />
          <Route exact path="/posts/:id" component={DetailUser} />
          <Route exact path="/comments/:id" component={DetailComment} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;