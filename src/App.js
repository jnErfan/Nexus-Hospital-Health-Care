import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch,  Route} from 'react-router-dom';
import NavBar from './Nexus_Hospital/Pages/Shared/NavBar/NavBar';
import Services from './Nexus_Hospital/Pages/Home/Services/Services';
import NotFound from './Nexus_Hospital/Pages/NotFound/NotFound';
import HomeContainer from './Nexus_Hospital/Pages/Home/HomeContainer/HomeContainer';
import Footer from './Nexus_Hospital/Pages/Shared/Footer/Footer';
import Blogs from './Nexus_Hospital/Pages/Blogs/Blogs';
import About from './Nexus_Hospital/Pages/About/About';
import Contract from './Nexus_Hospital/Pages/Contract/Contract';

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

       <Route path="/blogs">
          <Blogs/>
       </Route>

       <Route path="/about">
          <About/>
       </Route>

       <Route path="/contract">
          <Contract/>
       </Route>

       <Route exact path="*">
          <NotFound/>
       </Route>

     </Switch>
     <Footer/>
   </Router>
    </div>
  );
}

export default App;
