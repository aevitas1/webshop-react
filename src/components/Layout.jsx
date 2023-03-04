import { useContext } from "react";
import AppContext from "../context/AppContext";
import Footer from "./footer/Footer";
import Navigation from "./navigation/Navigation";
import LoginModal from "./navigation/sidebarRight/LoginModal";
import CreateAccountModal from "./navigation/sidebarRight/CreateAccountModal";
import { LoginProvider } from "../context/LoginContext";

const Layout = () => {
  const { openAccountModal, openLoginModal } = useContext(AppContext);

  return (
    <>
      {openLoginModal ? <LoginModal /> : ""}
      {openAccountModal ? <CreateAccountModal /> : ""}
      <LoginProvider>
        <Navigation />
      </LoginProvider>
      <Footer />
    </>
  );
};

export default Layout;
