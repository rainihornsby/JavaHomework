import './App.css';
import Nav from './breakoutComponents/Nav';
import Home from './breakoutComponents/Home';
import Dashboard from './breakoutComponents/Dashboard';
import About from './breakoutComponents/About';
import Breakout from './games/Breakout';
// import Tetris from './games/Tetris';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
      
      <Switch>
      
      <Route path="/" exact component={Home}/>
      
      <Route path="/about" component={About}/>

      <Route path="/dashboard" component={Dashboard}/>
      
      <Route path="/breakout" component={Breakout}/>
      
      {/* <Route path="/tetris" component={Tetris} /> */}
      
      </Switch>
    </div>
    </Router>
  );
}

export default App;
