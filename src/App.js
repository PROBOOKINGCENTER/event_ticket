import React, { Component } from 'react';
import Ticket from './Pages/Ticket';
import {Route, Switch, Router} from 'react-router'
import {createBrowserHistory} from 'history';
import Events from './Pages/events';
import Error404 from './Pages/Error404';
import 'bootstrap/dist/css/bootstrap.css'
class App extends Component {
    constructor(props){
      super(props)
      this.browserHistory = createBrowserHistory()
    }
    componentDidMount(){
      console.error("brokern")
    }
  render() {
    return (
      <div className="App">
      <Router history={this.browserHistory}>
        <Switch>
          <Route path="/event/:year/:month" component={Ticket}  /> 
          <Route path="/" exact component={Events} />
           <Route component={Error404}/>
        </Switch>
      </Router>
      </div>
    );
  }
}

export default App;
