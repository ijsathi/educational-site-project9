import './App.css';
import { BrowserRouter as Router,Switch, Route} from "react-router-dom";
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Enroll from './components/Enroll/Enroll';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route  path='/home'>
            <Home></Home>
          </Route>
          <Route path="/services">
            <Service></Service>
          </Route>
          <Route path="/about-us">
            <About></About>
          </Route>
          <Route path="/contact-us">
            <Contact></Contact>
          </Route>
          <Route  path="/enroll-now">
            <Enroll></Enroll>
          </Route>
          <Route exact path="">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
