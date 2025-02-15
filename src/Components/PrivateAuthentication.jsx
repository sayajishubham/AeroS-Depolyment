import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../Services/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const PrivateAuthentication = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);

  console.log("User:", user);
  console.log("Loading:", loading);
  console.log("Error:", error);

  if (loading) {
    return (
      <div className="loader-spin">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    ); // Customize with a loader component
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Display error message
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateAuthentication;
