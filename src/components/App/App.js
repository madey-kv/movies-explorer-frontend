import React, {useState} from 'react';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import './App.css'
import SavedMovies from "../SavedMovies/SavedMovies";
import Register from "../Register/Register";
import '../Preloader/Preloader.css'
import Preloader from '../Preloader/Preloader';
import Login from "../Login/Login";
import Error from "../Error/Error";
import Profile from "../Profile/Profile";
import {Route, Switch, useLocation} from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
    const location = useLocation();
    console.log(location.pathname === "/saved-movies")
  return (
      <div className="page">
          <Switch>
              <Route exact path="/">
                  <Header loggedIn={false}/>
                  <Main />
                  <Footer />
              </Route>
              <Route path="/signin">
                  <Login />
              </Route>
              <Route path="/signup">
                  <Register/>
              </Route>
              <Route path="/movies">
                  <Header loggedIn={true}/>
                  <Movies />
                  <Footer />
              </Route>
              <Route path="/saved-movies">
                  <Header loggedIn={true}/>
                  <SavedMovies />
                  <Footer />
              </Route>
              <Route path="/profile">
                  <Header loggedIn={true}/>
                  <Profile/>
              </Route>
              <Route path="*">
                  <Error />
              </Route>
          </Switch>
      </div>
  );
}

export default App;
