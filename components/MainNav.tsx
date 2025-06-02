"use client";
import { useState } from "react";
import Navbar from "./navbar";
import NavMenu from "./ui/nav-menu";

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Navbar isOpen={isOpen} setIsOpen={setIsOpen} />
      <NavMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default MainNav;
