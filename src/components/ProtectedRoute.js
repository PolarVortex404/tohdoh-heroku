import { withAuthenticationRequired } from "@auth0/auth0-react";
import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
import { Loader } from "./loader";

export const ProtectedRoute = ({ component, ...propsForComponent }) => {
  const Component = withAuthenticationRequired(component, {
    // onRedirecting: () => <Loader />
  })
return <Component {...propsForComponent} />
}
