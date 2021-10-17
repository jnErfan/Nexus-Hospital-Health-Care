import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch,  Route} from 'react-router-dom';
import NavBar from './Nexus_Hospital/Pages/Shared/NavBar/NavBar';
import Home from './Nexus_Hospital/Pages/Home/Home/Home';
import Services from './Nexus_Hospital/Pages/Home/Services/Services';

function App() {
  return (
    <div className="App">
   <Router>
     <NavBar/>
     <Switch>

       <Route exact path="/">
          <Home/>
       </Route>

       <Route path="/home">
          <Home/>
       </Route>

       <Route path="/services">
          <Services/>
       </Route>

     </Switch>
   </Router>
    </div>
  );
}

export default App;
