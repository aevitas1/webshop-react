import { useContext } from "react";
import AppContext from "../context/AppContext";
import Footer from "./footer/Footer";
import Navigation from "./navigation/Navigation";
import LoginModal from "./navigation/sidebarRight/LoginModal";
import CreateAccountModal from "./navigation/sidebarRight/CreateAccountModal";
const Layout = () => {
  const { openAccountModal, openLoginModal } = useContext(AppContext);
  return (
    <>
      {openLoginModal ? <LoginModal /> : ""}
      {openAccountModal ? <CreateAccountModal /> : ""}
      <Navigation />
      <Footer />
    </>
  );
};

export default Layout;
