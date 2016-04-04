import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'
import styles from './App.css';

// Layouts
import SiteNavigationLayout from "./layouts/SiteNavigation";
// Views
import HomeView from "./views/Home";
import NotFoundView from "./views/NotFound";
import ResumeView from "./views/Resume";

class App extends React.Component {
  render() {
    console.log("test");
    console.log(HomeView);

    return (
      <Router history={browserHistory}>
          <Route path="/" component={SiteNavigationLayout} >
            <IndexRoute component={HomeView}/>
            <Route path="resume" component={ResumeView}/>
            <Route path="*" component={NotFoundView}/>
          </Route>
      </Router>
    );
  }
}

export default App;
