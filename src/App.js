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
import ServiceDetails from './Nexus_Hospital/Pages/Home/ServiceDetails/ServiceDetails';
import SignIn from './Nexus_Hospital/SignIn/SignIn';
import Login from './Nexus_Hospital/Login/Login';
import AuthContext from './Nexus_Hospital/Context/AuthContext';
import PrivateRoute from './Nexus_Hospital/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
         <AuthContext>
            {/* Context Api All Children  */}
   <Router>
     <NavBar/>
     <Switch>
      {/* Default Showing Page (Home Page) */}
       <Route exact path="/">
          <HomeContainer/>
       </Route>

         {/* Home Page  */}
       <Route path="/home">
          <HomeContainer/>
       </Route>

      {/* Services Page  */}
       <Route path="/services">
          <Services/>
       </Route>

      {/* Dynamic Routing Service Details Page And This Is Private Route  */}
       <PrivateRoute path="/service/:serviceId">
          <ServiceDetails/>
       </PrivateRoute>

         {/* Our Blog Page  */}
       <Route path="/blogs">
          <Blogs/>
       </Route>

      {/* About Us Page  */}
       <Route path="/about">
          <About/>
       </Route>

      {/* Contract Us Page */}
       <PrivateRoute path="/contract">
          <Contract/>
       </PrivateRoute>

      {/* Sign In  */}
       <Route path="/signin">
          <SignIn/>
       </Route>

      {/* Log In  */}
       <Route path="/login">
          <Login/>
       </Route>

         {/* Error Page 404 Page Not Found  */}
       <Route exact path="*">
          <NotFound/>
       </Route>

     </Switch>
     <Footer/>
   </Router>
   
         </AuthContext>
    </div>
  );
}

export default App;
