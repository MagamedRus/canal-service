import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { basePath, authPath } from "./constants/routePath";
import AuthPage from "./pages/AuthPage";
import PublishesPage from "./pages/PublishesPage";

const AppRouter = () => (
  <HashRouter>
    <Routes>
      <Route path={authPath} element={<AuthPage />} />
      <Route path={basePath} element={<PublishesPage />} />
    </Routes>
  </HashRouter>
);

export default AppRouter;
