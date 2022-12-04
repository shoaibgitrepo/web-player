import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { logout } from "../../../redux/slices/authSlice";
import Loader from "../../components/Loader";

function Logout() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);

  return <Loader />;
}

export default Logout;
