import React from "react";
import PaginationNavbar from "../components/navbar";
import Main from "../layout";
import About from "../pages/about";
import Login from "../pages/Auth/login";
import SignUp from "../pages/Auth/signup";
import Complaint from "../pages/complaint";
import Contact from "../pages/contact";
import FaQ from "../pages/faq";
import Home from "../pages/home";

const RoutesPath = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/faQ",
    element: <FaQ />,
  },
  {
    path: "/complaint",
    element: <Complaint />,
  },
];

export default RoutesPath;
