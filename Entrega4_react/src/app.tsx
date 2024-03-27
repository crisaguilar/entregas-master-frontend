import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Login";
import { ListContainer } from "./list/ListContainer";
import { Detail } from "./Detail";

export const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/list/:organization?" element={<ListContainer />} />
        <Route path="/detail/:organization/:id" element={<Detail />} />
      </Routes>
    </Router>
  );
};
