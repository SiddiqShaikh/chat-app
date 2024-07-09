import React from "react";
import { createBrowserRouter } from "react-router-dom";

// import ProtectedRoute from "./ProtectedRoute";
import Auth from "@/pages/Auth";
import Chat from "@/pages/Chat";
import ProtectedRoute from "./ProtectedRoute";

// Function to get the access token from cookies
// const getAccessToken = () => {
//   return Cookies.get('accessToken');
// }

// Function to check if the user is authenticated
const isAuthenticated = () => {
  return true;
};

// Create the router configuration
const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />,
    index: true,
  },
  {
    element: <ProtectedRoute isAuthenticated={isAuthenticated()} />,
    children: [
      {
        path: "/",
        element: <Chat />,
      },
    ],
  },
  {
    path: "*",
    element: <p>404 Error - Nothing here...</p>,
  },
]);

export default router;
