import './App.scss';
import Tracks from './views/Listening';
import Home from './views/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
        <Switch>
          <Route path="/Tracks">
            <Tracks />
          </Route>
          <Route path="/" exact component={Home}>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
