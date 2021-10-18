import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch,  Route} from 'react-router-dom';
import NavBar from './Nexus_Hospital/Pages/Shared/NavBar/NavBar';
import Services from './Nexus_Hospital/Pages/Home/Services/Services';
import NotFound from './Nexus_Hospital/Pages/NotFound/NotFound';
import HomeContainer from './Nexus_Hospital/Pages/Home/HomeContainer/HomeContainer';

function App() {
  return (
    <div className="App">
   <Router>
     <NavBar/>
     <Switch>

       <Route exact path="/">
          <HomeContainer/>
       </Route>

       <Route path="/home">
          <HomeContainer/>
       </Route>

       <Route path="/services">
          <Services/>
       </Route>

       <Route exact path="*">
          <NotFound/>
       </Route>

     </Switch>
   </Router>
    </div>
  );
}

export default App;
