import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";

import Dashboard from "./components/Dashboard";
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import Password from "./components/Password";
import ProductInfo from "./components/ProductInfo";
import UserInfo from "./components/UserInfo";

const router= createBrowserRouter([
    {path:'/',element:<Login/> },
    {path:'/setpassword', element:<Password />},
    {path:'/signup', element:<Signup/>},
    {path:'/dashboard', element:<Dashboard />},
    {path:'/products', element:<ProductInfo />},
    {path:'/users', element:<UserInfo />}
]);
function App(){
    return <RouterProvider router={router}/>
};
export default App;
