import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../pages/Blog/Blog";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import SignUp from "../../pages/SignUp/SignUp";

const router=createBrowserRouter([
    {
        path:'/',element:<Main></Main>,
        children:[
            {path:'/',element:<Home> </Home>},
            {path:'/blog',element:<Blog></Blog>},
            {path:'/login',element:<Login></Login>},
            {path:'/signup',element:<SignUp></SignUp>},
        ]
    },
    { path: '/*', element: <Error></Error> },
]);

export default router;