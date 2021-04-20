import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import AddProduct from "./components/AddProduct/AddProduct";
import Admin from "./components/Admin/Admin";
import Checkout from "./components/Checkout/Checkout";
import CreateNewAccount from "./components/CreateNewAccount/CreateNewAccount";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import ManageProduct from "./components/ManageProduct/ManageProduct";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import Order from "./components/Order/Order";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { createContext, useState } from "react";

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
   <UserContext.Provider value = {[loggedInUser, setLoggedInUser]}>
     <Router>
       <Navbar/>
       <Switch>
         <Route exact path="/">
           <Home/>
         </Route>
          <Route path="/home">
           <Home/>
         </Route>
         <PrivateRoute path="/admin">
           <Admin/>
         </PrivateRoute>
         <Route path="/login">
           <Login/>
         </Route>
         <PrivateRoute path="/checkout/:pname">
           <Checkout/>
         </PrivateRoute>
          <PrivateRoute path="/orders">
            <Order/>
         </PrivateRoute>
         <Route path="/create-account">
           <CreateNewAccount/>
         </Route>
         <Route path="/add-product">
           <AddProduct/>
         </Route>
         <Route path="/manage-product">
           <ManageProduct/>
         </Route>
         <Route path="*">
           <NotFound/>
         </Route>
       </Switch>
     </Router>
   </UserContext.Provider>
  );
}

export default App;
