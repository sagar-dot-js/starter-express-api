import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../Context";

const Header = () => {
  let { loginSession, setLoginSession } = useContext(ContextProvider);

  return (
    <div className="h-full bg-[#fff] flex items-center  justify-between custom-px border shadow-sm">
      <div>
        <Link to="/">
          <p className="text-[#338573] text-[28px] font-semibold">
            {" "}
            Job Portal
          </p>
        </Link>
      </div>
      <div className="flex gap-5 items-center justify-between">
        <p className="text-[18px] text-[#338573] font-semibold">
          {loginSession.loginStautus ? (
            <Link to={`/job-list/${loginSession?.loggedInUser?.userName}`}>
              {" "}
              {loginSession?.loggedInUser?.userName}
            </Link>
          ) : (
            <Link to={`/login`}>Login</Link>
          )}
        </p>

        <Link to="/create-job">
          <button className="custom-btn text-[18px] ">Post a job</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
