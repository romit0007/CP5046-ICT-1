import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages';
import BApage from './pages/BA';
import Mservices from './pages/Mservices';
import ContactPage from './pages/Contact';
import Policy from './pages/Policy';
import Covid from './pages/Covid';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/BA' component={BApage} exact />
        <Route path='/MServices' component={Mservices} exact />
        <Route path='/Contact' component={ContactPage} exact />
        <Route path='/Policy' component={Policy} exact/> 
        <Route path='/Covid' component={Covid} exact /> 
      </Switch>
    </Router>
  );
}

export default App;
