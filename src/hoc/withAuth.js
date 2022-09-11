import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => () => {
  const navigate = useNavigate();
  const authData = useSelector((state) => state.auth);
  useEffect(() => {
    authData.id === null && navigate("auth");
  }, [authData, navigate]);

  return <WrappedComponent />;
};

export default withAuth;
