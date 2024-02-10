import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { fetchCurrentUser } from "../api";
import { checkAuthUser } from "../features/auth/authSlice";
import { Loading } from "../assets/icons";

const AuthLayout = ({ children, authentication = true }) => {
  const { pathname } = useLocation();
  // console.log(location.pathname);
  const navigate = useNavigate();
  const [loader, setLoader] = useState(true);
  const dispatch = useDispatch();
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    const getCurrentUser = async () => {
      const result = await fetchCurrentUser();
      console.log(result);
      dispatch(checkAuthUser(result));
      if (pathname == "/login" && result === true) {
        navigate("/users");
      } else if (result === false) {
        localStorage.removeItem("token");
        navigate("/login");
      }
      setLoader(false);
    };
    getCurrentUser();
  }, [navigate]);

  return loader ? (
    <div className="flex justify-center h-full w-full">
      <Loading />
    </div>
  ) : (
    <>{children}</>
  );
};

export default AuthLayout;
