import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoginPage, DetailPage, OrganizationPage, IndexPage } from "@/scenes";

export const RouterComponent: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path={"/"} element={<IndexPage />} />
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/filter"} element={<OrganizationPage />} />
        <Route path={"/detail/:id"} element={<DetailPage />} />
      </Routes>
    </Router>
  );
};
