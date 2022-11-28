import { createBrowserRouter } from "react-router-dom";
import AddProduct from "../../Dashboard/AddProduct/AddProduct";
import AllUsers from "../../Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Dashboard/Dashboard/Dashboard";
import MyBooking from "../../Dashboard/MyBooking/MyBooking";
import Payment from "../../Dashboard/Payment/Payment";
import WishList from "../../Dashboard/WishList/WishList";
import DashboardLayout from "../../Layout/DashboardLayout";
import Main from "../../Layout/Main";
import AddProducts from "../../pages/AddProducts/AddProducts";
import Blog from "../../pages/Blog/Blog";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SportsBike from "../../pages/Products/SportsBike/SportsBike";
import DisplayError from "../../pages/Shared/DisplayError/DisplayError";
import SignUp from "../../pages/SignUp/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

const router=createBrowserRouter([
    {
        path:'/',element:<Main></Main>,
        errorElement:<DisplayError></DisplayError>,
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
        path:'/dashboard',element:<PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement:<DisplayError></DisplayError>,
        children:[
            
            {path:'/dashboard/dashboard',element:<MyBooking></MyBooking>},
            {path:'/dashboard/wishlist',element:<WishList></WishList>},

            {path:'/dashboard/users',element:<AdminRoute><AllUsers></AllUsers></AdminRoute>},

            {path:'/dashboard/addproducts',element:<SellerRoute><AddProduct></AddProduct></SellerRoute>},
            

            {path:'/dashboard/payment/:id',element:<Payment></Payment>,
            loader:({params})=>fetch(`http://localhost:5000/bookings/${params.id}`)
        },
        ]
    },
    { path: '/*', element: <Error></Error> },
]);

export default router;