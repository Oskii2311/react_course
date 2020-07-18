import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ToDoList from "./ToDoList/ToDoList";
import About from "./About/About";
import Header from "../components/Header/Header";
import Edit from "./Edit/Edit";

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/edit/:id" component={Edit} />
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <ToDoList />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
