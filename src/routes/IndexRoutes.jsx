import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import DropdownMenu from "../pages/DropdownMenu";

const IndexRoutes = () => {
  return (
    <Routes>
      <Route path="/t" element={<Home />} />
      <Route path="/" element={<DropdownMenu />} />
    </Routes>
  );
};

export default IndexRoutes;
