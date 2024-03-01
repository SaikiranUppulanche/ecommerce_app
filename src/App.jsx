import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
import Store from "./pages/Store";
import RootLayout from "./pages/RootLayout";
import ContactPage from "./pages/ContactPage";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Login from "./pages/Login";
import { useContext, useEffect } from "react";
import { userAuthContext } from "./context/userAuthContext";

const AuthenticatedRoutes = ({ element }) => {
  const { isLoggedIn } = useContext(userAuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return isLoggedIn ? element : null;
};

const routes = [
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/store",
        element: <AuthenticatedRoutes element={<Store />} />,
        children: [
          { index: true, element: <Products /> },
          { path: "/store/:id", element: <ProductDetails /> },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
