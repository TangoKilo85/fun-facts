import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Highground from './components/Fact1'
import Duels from './components/Fact2'
import Memes from './components/Fact3'


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
            <Switch>
          <Route exact path='/Fact1' component={Highground}/>
          <Route path='/Fact2' component={Duels}/>
          <Route path='/Fact3' component={Memes}/>
            </Switch>
        </div>
      </BrowserRouter>
    )
  } 
}

export default App;