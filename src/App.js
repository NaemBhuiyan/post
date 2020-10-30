import React from "react";
import { Switch, Route } from "react-router-dom";
import { Container } from "reactstrap";
import Catagories from "./components/Catagories";
import Home from "./components/Home";
import TopNav from "./components/Navbar";
import { useSelector } from "react-redux";

function App() {
  const posts = useSelector((state) => state.posts);

  return (
    <Container className="App">
      <TopNav></TopNav>

      <Switch>
        <Route path="/catagories">
          <Catagories posts={posts} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;
