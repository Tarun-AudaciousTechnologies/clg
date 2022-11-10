import React from "react";
import { BrowserRouter, useRoutes, Routes, Route } from "react-router-dom";
import Footer from "../components/footer";
import PaginationNavbar from "../components/navbar";
import Toastify from "../components/Toastify";
import DefaultLayout from "../layout";
import Login from "../pages/Auth/login";
import SignUp from "../pages/Auth/signup";
import ProtectedRoutes from "../protectedRoutes";
import RoutesPath from "./routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" name="Login" element={<Login />} />
        <Route path="/signup" name="SignUp" element={<SignUp />} />
        <Route element={<ProtectedRoutes />}>
          <Route path="*" name="Home" element={<DefaultLayout />} />
        </Route>
      </Routes>
      <Toastify />
    </BrowserRouter>
  );
};

export default Router;
