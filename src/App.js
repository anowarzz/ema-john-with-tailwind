import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Orders from "./components/Orders/Orders";
import Shop from "./components/Shop/Shop";
import Inventory from "./components/Inventory/Inventory"
import Main from "./layouts/Main";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import { ProductsAndCardLoader } from "./loaders/ProductsAndCartLoader";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <ErrorPage /> ,
      children: [
        {
          path: "/",
          loader: () => fetch('products.json'),
          element: <Shop />,
        },
        {
          path: '/orders',
          loader: ProductsAndCardLoader,
          element: <Orders />,
        },
        {
          path: '/inventory',
          element: <Inventory />
        },
        { path: 'about', element: <About /> },
        {
          path:'/login',
          element: <Login /> 
        },
        {
          path:'/signup',
          element: <SignUp /> 
        }
      ],
    },

    
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
