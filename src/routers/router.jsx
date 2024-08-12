import React, { Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../home/Home";
const Shop = React.lazy(()=> import("../shop/Shop"))

import About from "../components/About";
import Blog from "../components/Blog";

const DashBoardLayout = React.lazy(()=> import("../dashboard/DashBoardLayout"))
const UploadAntiques = React.lazy(()=> import("../dashboard/UploadAntiques"))
import DashBoard from "../dashboard/DashBoard";

const ManageAntiques = React.lazy(()=> import("../dashboard/ManageAntiques"))

const EditAntiques = React.lazy(()=> import("../dashboard/EditAntiques"))
import Signup from "../components/Signup";
import Login from "../components/Login";
import PrivateRoute from "../privateRoute/PrivateRoute";
import Logout from "../components/Logout";
import CategorizedAntiques from "../home/categorized/CategorizedAntiques";
import { fetchAntiqueByCategory } from "../home/FetchAntiqueByCategory";

const ProductDetailsPage = React.lazy(()=> import("../orderSection/ProductDetailsPage/ProductDetailsPage"))
const Cart = React.lazy(()=> import("../orderSection/cart/Cart"))
const WishList = React.lazy(()=> import("../orderSection/wishlist/WishList"))
const Checkout = React.lazy(()=> import("../orderSection/checkout/Checkout"))
const SuccessPage = React.lazy(()=> import ('../orderSection/checkout/SuccessPage'))
const ErrorPage = React.lazy(()=> import ('../orderSection/checkout/UnSuccessfulPage'))

import UserProfile from "../components/userDetails/UserProfile";



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
                    element: <Suspense fallback={<div>Loading...</div>}><Shop /></Suspense>,
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
                    element: <Suspense fallback={<div>Loading...</div>}><WishList /></Suspense>,
               },
               {
                    path: "/cart",
                    element: <Suspense fallback={<div>Loading...</div>}><Cart /></Suspense>,
               },
               {
                    path: "/checkout",
                    element: <Suspense fallback={<div>Loading...</div>}><Checkout /></Suspense>,
               },
               {
                    path: "/success",
                    element: <Suspense fallback={<div>Loading...</div>}><SuccessPage /></Suspense>,
               },
               {
                    path: "/unsuccess",
                    element: <Suspense fallback={<div>Loading...</div>}><ErrorPage /></Suspense>,
               },
               {
                    path:'/userProfile',
                    element: <UserProfile/>
               },
               {
                    path: "/art/:id",
                    element: <Suspense fallback={<div>Loading...</div>}><ProductDetailsPage /></Suspense>,
                    loader: ({ params }) => fetch(`https://antique-web.onrender.com/art/${params.id}`),
               },
               {
                    path: "/all-arts/:category",
                    element: <CategorizedAntiques />,
                    loader: fetchAntiqueByCategory,
               },

          ],
     },
     {
          path: "/admin/dashboard",
          element: <Suspense fallback={<div>Loading...</div>}><DashBoardLayout/></Suspense>,
          children: [
               {
                    path: "/admin/dashboard",
                    element: (
                         <PrivateRoute>
                              <DashBoard />
                         </PrivateRoute>
                    ),
               },
               {
                    path: "/admin/dashboard/upload",
                    element: (
                         <Suspense fallback={<div>Loading...</div>}>
                         <PrivateRoute>
                              <UploadAntiques />
                         </PrivateRoute>
                         </Suspense>
                    ),
               },
               {
                    path: "/admin/dashboard/manage",
                    element: <Suspense fallback={<div>Loading...</div>}><ManageAntiques /></Suspense>,
               },
               {
                    path: "/admin/dashboard/edit-antiques/:id",
                    element: <Suspense fallback={<div>Loading...</div>}><EditAntiques /></Suspense>,
                    loader: ({ params }) => fetch(`https://antique-web.onrender.com/art/${params.id}`),
               },
          ],
     },
     {
          path: "sign-up",
          element: <Signup />,
     },
     {
          path: "login",
          element: <Login />,
     },
     {
          path: "logout",
          element: <Logout />,
     },
]);

export default router;
