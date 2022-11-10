import React from "react";
import { Outlet, useRoutes } from "react-router-dom";
import Footer from "../components/footer";
import PaginationNavbar from "../components/navbar";
import RoutesPath from "../routes/routes";

const RouterOutlet = () => {
  const routes = useRoutes(RoutesPath);
  return routes;
};
const DefaultLayout = () => {
  return (
    <>
      <PaginationNavbar />
      <RouterOutlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
