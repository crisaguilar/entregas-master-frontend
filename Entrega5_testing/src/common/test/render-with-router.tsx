import React from 'react';
import { render } from '@testing-library/react';
import { HashRouter, Route, Routes } from 'react-router-dom';

export const renderWithRouter = (component, routes) => {
  return {
    ...render(
      <HashRouter>
        <Routes>
          <Route element={<></>} path="/" />
          {routes}
        </Routes>
        {component}
      </HashRouter>
    ),
  };
};
