import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

// import AboutPage from "./pages/About";
import HomePage from "./pages/Home";
// import Store from "./pages/Store";
import RootLayout from "./pages/RootLayout";
// import ContactPage from "./pages/ContactPage";
// import Products from "./pages/Products";
// import ProductDetails from "./pages/ProductDetails";
// import Login from "./pages/Login";
import { lazy, Suspense, useContext, useEffect } from "react";
import { userAuthContext } from "./context/userAuthContext";
import Loader from "./UI/Loader";

const Store = lazy(() => import("./pages/Store"));
const AboutPage = lazy(() => import("./pages/About"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Login = lazy(() => import("./pages/Login"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetails = lazy(() => import("./pages/ProductDetails"));

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
        element: (
          <Suspense>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: "/store",
        element: (
          <AuthenticatedRoutes
            element={
              <Suspense fallback={<Loader />}>
                <Store />
              </Suspense>
            }
          />
        ),
        children: [
          {
            index: true,
            element: (
              <Suspense>
                <Products />
              </Suspense>
            ),
          },
          {
            path: "/store/:id",
            element: (
              <Suspense>
                <ProductDetails />
              </Suspense>
            ),
          },
        ],
      },
      {
        path: "/login",
        element: (
          <Suspense fallback={<Loader />}>
            <Login />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: (
          <Suspense>
            <ContactPage />
          </Suspense>
        ),
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
