import React from "react";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import { BrowserRouter, Switch, Route, Redirect, HashRouter } from "react-router-dom";
import SingleBlog from "./Components/SingleBlog/SingleBlog";
import Footer from "./Components/Footer/Footer";
import Navbar from './Components/NavBar/Navbar';

function App() {
  return (
    <div className="App">
      <HashRouter >
        <Navbar/>
        <Switch>
          <Route path="/:id" exact component={SingleBlog}></Route>
          <Route path="/"  component={Blog}></Route>
        </Switch>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
