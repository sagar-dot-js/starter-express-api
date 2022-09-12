import Axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import jwt_decode from "jwt-decode";
export const ContextProvider = createContext();

const Context = ({ children }) => {
  const [loginSession, setLoginSession] = useState({ loginStautus: false });
  const [jobList, setJobList] = useState();

  let base = "https://job-portal-backend-mern.vercel.app";
  let local = "http://localhost:3001";

  let checkSession = () => {
    const cookies = new Cookies();
    let browserToken = cookies.get("token");
    const decoded = jwt_decode(browserToken);
    console.log(decoded);

    Axios.post(`${local}/checkSession`, {
      headers: browserToken,
    }).then((result) => {
      console.log(result);
    });
  };

  let getJoblist = () => {
    Axios.get(`${base}/getJobList`).then((result) => {
      setJobList(result);
    });
  };

  useEffect(() => {
    checkSession();
    getJoblist();
  }, []);

  return (
    <ContextProvider.Provider
      value={{ loginSession, setLoginSession, jobList, setJobList }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default Context;
