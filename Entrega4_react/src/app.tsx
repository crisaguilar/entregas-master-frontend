import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./login/Login";
import { ListContainer } from "./list/ListContainer";
import { Detail } from "./detail/Detail";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list/:organization?" element={<ListContainer />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
};
