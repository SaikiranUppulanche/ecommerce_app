import NavBar from "../components/NavBar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <NavBar />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
