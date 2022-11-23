import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Blog from "../../pages/Blog/Blog";
import Error from "../../pages/Error/Error";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";

const router=createBrowserRouter([
    {
        path:'/',element:<Main></Main>,
        children:[
            {path:'/',element:<Home> </Home>},
            {path:'/blog',element:<Blog></Blog>},
            {path:'/login',element:<Login></Login>},
        ]
    },
    { path: '/*', element: <Error></Error> },
]);

export default router;