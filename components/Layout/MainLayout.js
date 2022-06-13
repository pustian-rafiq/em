import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Chat from "../MessengerChat/Chat";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Chat />
      <Footer />
    </>
  );
};

export default Layout;
