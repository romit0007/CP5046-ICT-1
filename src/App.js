import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages';
import BApage from './pages/BA';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/BA' component={BApage} exact />
      </Switch>
    </Router>
  );
}

export default App;
