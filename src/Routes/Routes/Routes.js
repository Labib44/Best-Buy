import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../../Dashboard/AddProduct/AddProduct";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProducts from "../../pages/AddProducts/AddProducts";
import Blog from "../../pages/Blog/Blog";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SportsBike from "../../pages/Products/SportsBike/SportsBike";
import SignUp from "../../pages/SignUp/SignUp";

const router=createBrowserRouter([
    {
        path:'/',element:<Main></Main>,
        children:[
            {path:'/',element:<Home> </Home>},
            {path:'/blog',element:<Blog></Blog>},
            {path:'/login',element:<Login></Login>},
            {path:'/signup',element:<SignUp></SignUp>},
            {path:'/sportsbike/:id',element:<SportsBike></SportsBike>,
            loader:({params})=>fetch(`http://localhost:5000/productsCollection/${params.id}`)
        },
        ]
    },
    {
        path:'/dashboard',element:<DashboardLayout></DashboardLayout>,
        children:[
            {path:'/dashboard/addproduct',element:<AddProduct></AddProduct>}
        ]
    },
    { path: '/*', element: <Error></Error> },
]);

export default router;