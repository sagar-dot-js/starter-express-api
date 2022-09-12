import React, { useContext, useEffect } from "react";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import CreateOutlinedIcon from "@mui/icons-material/CreateOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import Axios from "axios";
import { ContextProvider } from "../../Context";
import Login from "./Login";
import { Link, useParams } from "react-router-dom";

const JobList = () => {
  let base = "https://job-portal-backend-mern.vercel.app/";
  let { jobList, setJobList, loginSession, setLoginSession } =
    useContext(ContextProvider);
  let urlParams = useParams().userName;

  let jobByUser = jobList?.data?.filter((x) => x.jobPostBy === urlParams);
  console.log(jobByUser);

  let deleteJob = (id) => {
    Axios.delete(`${base}delete-job/${id}`).then((rsult) => {
      alert("Deleted");
    });
  };

  return (
    <>
      {!loginSession.loginStautus ? (
        <Login />
      ) : (
        <div className="h-screen mt-[60px]">
          <div className="h-[80px] bg-[#F4F5F7] w-full mt-[60px] text-[25px] font-[600] flex items-center justify-center ">
            <p>Jobs Posted By {urlParams} </p>
            <Link to="/">
              <button
                className="custom-btn absolute bottom-0"
                onClick={() => setLoginSession({})}
              >
                LogOut
              </button>
            </Link>
          </div>
          <div className=" w-full p-5 ">
            <div className=" w-full border h-[650px]  overflow-y-scroll ">
              <table className=" jobList-table  ">
                <tr className=" w-full">
                  <th>Title</th>
                  <th>Job Type</th>
                  <th>Posted Date</th>
                  <th> Application Deadline</th>
                  <th> Action</th>
                </tr>

                {jobByUser?.map((item) => {
                  return (
                    <tr key={item?._id}>
                      <td>{item?.jobTitle}</td>
                      <td>{item?.jobType}</td>
                      <td>12/06/2022</td>
                      <td> {item?.deadline}</td>
                      <td>
                        <div className="flex gap-3 ">
                          <Link to={`/Job-Details/${item?._id}`}>
                            <RemoveRedEyeOutlinedIcon className="text-[#338573]" />
                          </Link>
                          <CreateOutlinedIcon className="text-[#04BCF6]" />
                          <DeleteOutlinedIcon
                            className="text-[#FA0606] cursor-pointer"
                            onClick={() => {
                              deleteJob(item._id);
                            }}
                          />
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobList;
