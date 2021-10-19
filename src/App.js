import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from './Components/Pages/Shared/Header/Header';
import Footer from './Components/Pages/Shared/Footer/Footer';
import NotFound from './Components/Pages/Shared/NotFound/NotFound';
import Home from './Components/Pages/Home/Home/Home';
import Contact from './Components/Pages/Home/Contact/Contact';
import AboutUs from './Components/Pages/Home/AboutUs/AboutUs';
import ShowDetails from './Components/Pages/ShowDetails/ShowDetails';
import Login from './Components/Pages/Home/Login/Login/Login';
import AuthProvider from './Components/Context/AuthProvider';
import PrivateRoute from './Components/Pages/Home/Login/PriveteRoute/PrivateRoute';
import Services from './Components/Pages/Home/Services/Services';
import Register from './Components/Pages/Home/Login/Register/Register';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services">
              <Services></Services>
            </Route>
            <PrivateRoute path="/showdetails/:serviceId">
              <ShowDetails></ShowDetails>
            </PrivateRoute>
            <Route path="/aboutus">
              <AboutUs></AboutUs>
            </Route>
            <PrivateRoute path="/contact">
              <Contact></Contact>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
