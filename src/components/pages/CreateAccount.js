import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

const CreateAccount = () => {
  let [user, setUser] = useState();
  let [statusMsg, setStatusMsg] = useState();
  let base = "https://job-portal-backend-mern.vercel.app/";
  const navigate = useNavigate();

  let handelInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  let createUser = () => {
    Axios.post(`${base}createNewUser`, user).then((result) => {
      setStatusMsg(result.data);
      alert("User Register Sucessfully");
      navigate("/login");
    });
  };

  console.log(statusMsg);

  return (
    <div className="h-screen">
      <div className="h-[80px] bg-[#F4F5F7] w-full mt-[60px] text-[25px] font-[600] flex items-center justify-center ">
        <p>Register User</p>
      </div>
      <div className="flex justify-center mt-[50px]">
        <div className="p-5 border  md:w-[35%] w-[90%]">
          <table className="loginTable ">
            <tr>
              <td>
                <p className="custom-title">Username</p>
              </td>
              <td></td>
            </tr>
            <tr>
              <td colSpan="2">
                <input
                  type="text"
                  className="custom-input"
                  placeholder="username"
                  name="userName"
                  onChange={(e) => {
                    handelInputChange(e);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <p className="custom-title">Password</p>
              </td>
              <td></td>
            </tr>
            <tr>
              <td colSpan="2">
                <input
                  type="text"
                  className="custom-input"
                  placeholder="Password"
                  name="password"
                  onChange={(e) => {
                    handelInputChange(e);
                  }}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <p>{statusMsg}</p>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button
                  className="custom-btn w-full"
                  onClick={() => {
                    createUser();
                  }}
                >
                  Create Account
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <div className=" flex items-center justify-center">
                  <p>
                    Already member?{" "}
                    <Link to="/login">
                      <span className="text-blue-600">Login Here</span>{" "}
                    </Link>
                  </p>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
