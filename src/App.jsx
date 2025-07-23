// // import Loader from "./assets/Loaders/Loader";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Layout from "./layouts/Layout";
// import NotFound from "./pages/NotFound/NotFound";
// import Home from "./pages/Home/Home";
// import Login from "./pages/Login/Login";
// import Products from "./pages/Products/Products";
// import ProductDetail from "./pages/ProductDetail/ProductDetail";
// import Aboutus from "./pages/AboutUs/Aboutus";
// import Signup from "./pages/Signup/Signup";


// function App() {
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <Layout />,
//       children: [
//         {
//          index:true,
//           element: <Home />,
//         },
//         {
//           path: "aboutus",
//           element: <Aboutus />,
//         },
//         {
//           path: "login",
//           element: <Login />,
//         },
//          {
//           path: "signup",
//           element: <Signup />,
//         },
//         {
//           path: "products",
//           element: <Products />,
//         },
//          {
//           path: "productdetail",
//           element: <ProductDetail />,
//         },
//         // {
//         //   path: ":categoryName",
//         //   element: <BrandPage />,
//         // },
//         // {
//         //   path: ":categoryName/:brandName",
//         //   element: <BrandProductPage />,
//         // },
       
//           {
//       path: "*",
//       element: <NotFound />,
//     },
//       ]
//     },
  
//   ]);

//   return <RouterProvider router={router} />;
// }

// export default App;
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import NotFound from "./pages/NotFound/NotFound";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Aboutus from "./pages/AboutUs/Aboutus";
import Signup from "./pages/Signup/Signup";
import PrivateRoute from "./pages/ProtectedRoute/ProtectedRoute";
// import PrivateRoute from "./components/PrivateRoute"; // <- Import

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        { path: "aboutus", element: <Aboutus /> },
        { path: "login", element: <Login /> },
        { path: "signup", element: <Signup /> },

        // ✅ Protected Routes
        {
          element: <PrivateRoute />, // 👈 will protect children below
          children: [
            { path: "products", element: <Products /> },
            { path: "productdetail", element: <ProductDetail /> },
          ],
        },

        { path: "*", element: <NotFound /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
