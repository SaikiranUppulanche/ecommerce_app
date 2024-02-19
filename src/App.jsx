import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AboutPage from "./pages/About";
import HomePage from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/about",
    element: <AboutPage />,
  },
  {
    path: "/",
    element: <HomePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
