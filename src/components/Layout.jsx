import React from "react";
import Nav from "./Nav_Foot/Nav";
import Foot from "./Nav_Foot/Foot";

const Layout = ({ children }) => {
  return (
    <div className="from-zinc-900 to-slate-900 bg-gradient-to-t overflow-x-hidden ">
      <Nav />
      {children}
      <Foot />
    </div>
  );
};

export default Layout;
