import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
import Shop from "../shop/Shop";
import About from "../components/About";
import Blog from "../components/Blog";
import DashBoardLayout from "../dashboard/DashBoardLayout";
import UploadAntiques from "../dashboard/UploadAntiques";
import DashBoard from "../dashboard/DashBoard";
import ManageAntiques from "../dashboard/ManageAntiques";
import EditAntiques from "../dashboard/EditAntiques";
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Logout from "../components/Logout";
import CategorizedAntiques from "../components/categorized/CategorizedAntiques";
import { fetchAntiqueByCategory } from "../home/FetchAntiqueByCategory";
import ProductDetailsPage from "../orderSection/ProductDetailsPage/ProductDetailsPage";
import Cart from "../orderSection/cart/Cart";
import WishList from "../components/WishList";

const router = createBrowserRouter([
     {
          path: "/",
          element: <App />,
          children: [
               {
                    path: "/",
                    element: <Home />,
               },
               {
                    path: "/shop",
                    element: <Shop />,
               },
               {
                    path: "/about",
                    element: <About />,
               },
               {
                    path: "/blog",
                    element: <Blog />,
               },
               {
                    path: "/wishlist",
                    element: <WishList />,
               },
               {
                    path: "/cart",
                    element: <Cart />,
             
               },
               {
                    path: "/art/:id",
                    element: <ProductDetailsPage/>,
                    loader:({params})=> fetch(`https://antique-web.onrender.com/art/${params.id}`)
               },
               {
                    path: "/all-arts/:category",
                    element: <CategorizedAntiques />,
                    loader: fetchAntiqueByCategory,
                  },
          ],
     },
     {
          path: '/admin/dashboard',
          element: <DashBoardLayout/>,
          children: [
               {
                    path:'/admin/dashboard',
                    element: <PrivateRoute><DashBoard/></PrivateRoute>
               },
               {
                    path:'/admin/dashboard/upload',
                    element: <PrivateRoute><UploadAntiques/></PrivateRoute>
               },
               {
                    path:'/admin/dashboard/manage',
                    element: <ManageAntiques/>
               },
               {
                    path:'/admin/dashboard/edit-antiques/:id',
                    element: <EditAntiques/>,
                    loader: ({params})=> fetch(`https://antique-web.onrender.com/art/${params.id}`)
               },
               
          ]
     },
     {
      path: 'sign-up',
      element: <Signup/>
     },
     {
          path:'login',
          element: <Login/>
     },
     {
          path:"logout",
          element: <Logout/>
     }
]);

export default router;
