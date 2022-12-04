import React, { useEffect } from "react";
import { getUserByToken, setUser } from "../../../redux/slices/authSlice";
import Loader from "../../components/Loader";
import { useSelector, useDispatch } from "react-redux";

function AuthInit({ children }) {
  const dispatch = useDispatch();

  const { loading, accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    // if (accessToken) dispatch(getUserByToken());
    // else dispatch(setUser(null));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Loader loading={loading} />
      {children}
    </>
  );
  // return <>{children}</>;
}

export default AuthInit;
