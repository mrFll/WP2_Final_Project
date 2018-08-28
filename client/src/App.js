import React, { Component } from 'react';
import {Route} from 'react-router-dom';

import searchPage from "./Pages/searchPage";
import addHousePage from "./Pages/addHousePage";
import dashboardPage from "./Pages/dashboardPage";
import editHousePage from "./Pages/editHousePage";
import houseDetailPage from "./Pages/houseDetailPage";
import loginPage from "./Pages/loginPage";
import resultPage from "./Pages/resultPage";
import signUpPage from "./Pages/signUpPage";
import editProfilePage from "./Pages/editProfilePage";


class App extends Component {
  render() {
    return (
      <div >
          <Route  path="/" exact={true} component={searchPage}/>
          <Route  path="/addHousePage" component={addHousePage}/>
          <Route  path="/houseDetailPage" component={houseDetailPage}/>
          <Route  path="/dashboard" component={dashboardPage}/>
          <Route  path="/editHousePage" component={editHousePage}/>
          <Route  path="/login" component={loginPage}/>
          <Route  path="/houses" component={resultPage}/>
          <Route  path="/signup" component={signUpPage}/>
          <Route  path="/editProfilePage" component={editProfilePage}/>
      </div>
    );
  }
}

export default App;
