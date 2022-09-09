import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { basePath, authPath } from "./constants/routePath";
import AuthPage from "./pages/AuthPage";
import PublishesPage from "./pages/PublishesPage";

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path={authPath} element={<AuthPage />} />
      <Route path={basePath} element={<PublishesPage />} />
    </Routes>
  </BrowserRouter>
);

export default AppRouter;
