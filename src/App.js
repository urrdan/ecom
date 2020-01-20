import React, { Component } from 'react';
import TopMenu from './components/TopMenu'
import Home from './components/Home'
import Men from './components/Men'
import Women from './components/Women'
import Kids from './components/Kids'
import Cart from './components/Cart'
import Detail from './components/Detail'
import AllCollection from './components/AllCollection';
import {Route, Switch} from 'react-router-dom'

class App extends Component { 
  render() {
    return (
      <div className='main'>
        <TopMenu/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route  path='/detail' component={Detail}/>
          <Route path='/cart' component={Cart}/>
          <Route path='/men' component={Men}/>
          <Route path='/women' component={Women}/>
          <Route path='/kids' component={Kids}/>
          <Route path='/allcollection' component={AllCollection}/>
        </Switch>

        
        <footer className='footer'>
          <ul>
            <li>About</li>
            <li>Disclaimers</li>
            <li>Subscribe</li>
            <li>Contact us</li>
            <li>More</li>
          </ul>
        </footer>
      </div>
    )
  }    
}
export default App;