// eslint-disable-next-line prettier/prettier
import React, { Component } from "react";
// eslint-disable-next-line prettier/prettier
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//Switch

import MainPage from "./pages/Mainpage/Mainpage";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";
import Mypage from "./pages/Mypage/Mypage";
import DetailPage from "./pages/Detailpage/Detailpage";
import Quiz from "./pages/Quiz/Quiz";
import QuizSecondPage from "./pages/Quiz/Component/QuizSecondPage";
import QuizThirdPage from "./pages/Quiz/Component/QuizThirdPage";
import QuizFourthPage from "./pages/Quiz/Component/QuizFourthPage";
import Reviewpage from "./pages/Reviewpage/Reviewpage";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/Nav" component={Nav} />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Mypage" component={Mypage} />
          <Route exact path="/MainPage" component={MainPage} />
          <Route exact path="/detail" component={DetailPage} />
          <Route exact path="/detail:id" component={DetailPage} />
          <Route exact path="/Quiz" component={Quiz} />
          <Route exact path="/secondPage" component={QuizSecondPage} />
          <Route exact path="/thirdPage" component={QuizThirdPage} />
          <Route exact path="/fourthPage" component={QuizFourthPage} />
          <Route exact path="/Reviewpage" component={Reviewpage} />
          <Route exact path="/Footer" component={Footer} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
