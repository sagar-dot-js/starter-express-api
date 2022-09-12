import Axios from "axios";
import React, { useContext, useState } from "react";
import { ContextProvider } from "../../Context";
import Login from "./Login";
import { Link, useNavigate } from "react-router-dom";

const CreateJob = () => {
  let [newJob, setNewJob] = useState();
  let { loginSession, setLoginSession } = useContext(ContextProvider);
  let base = "https://job-portal-backend-mern.vercel.app";
  const navigate = useNavigate();

  let handelInputChange = (e) => {
    setNewJob({
      ...newJob,
      [e.target.name]: e.target.value,
      jobPostBy: loginSession?.loggedInUser?.userName,
    });
  };

  let handelPostjob = () => {
    Axios.post(`${base}/createJob`, newJob).then((result) => {
      console.log(result);
      navigate("/job-list/:userName");
    });
  };

  console.log(loginSession);

  return (
    <>
      {!loginSession.loginStautus ? (
        <Login />
      ) : (
        <div className="w-full">
          <div className="h-[80px] bg-[#F4F5F7] w-full mt-[60px] text-[25px] font-[600] flex items-center justify-center ">
            <p>Create a Job</p>
          </div>
          <div className="w-full  p-5 mb-10">
            <div className="h-full w-full border p-5">
              <table className="createJob-table">
                <tr>
                  <td>
                    <p className="custom-title">Company Name</p>
                  </td>
                  <td>
                    <p className="custom-title"> Company Website </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      placeholder="Name"
                      className="custom-input"
                      name="companyName"
                      required
                      onChange={(e) => {
                        handelInputChange(e);
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="custom-input"
                      placeholder="Website"
                      name="website"
                      onChange={(e) => {
                        handelInputChange(e);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="custom-title">Job Title</p>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td colspan="2">
                    <input
                      type="text"
                      className="custom-input"
                      placeholder="Title"
                      name="jobTitle"
                      onChange={(e) => {
                        handelInputChange(e);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="custom-title">Job Category</p>
                  </td>
                  <td>
                    <p className="custom-title"> Job Type</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <select
                      className="custom-input"
                      name="jobCategory"
                      onChange={(e) => {
                        handelInputChange(e);
                      }}
                    >
                      <option>Technology</option>
                      <option>Finance</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="custom-input"
                      name="jobType"
                      onChange={(e) => {
                        handelInputChange(e);
                      }}
                    >
                      <option>Full Time</option>
                      <option>Internships</option>
                      <option>Remote</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="custom-title"> Job Location</p>
                  </td>
                  <td>
                    <p className="custom-title"> Salary Range </p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      className="custom-input"
                      placeholder="Location"
                      name="location"
                      onChange={(e) => {
                        handelInputChange(e);
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="custom-input"
                      placeholder="Amount"
                      name="salaryRange"
                      onChange={(e) => {
                        handelInputChange(e);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="custom-title"> Experience</p>
                  </td>
                  <td>
                    <p className="custom-title"> Qualification</p>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      className="custom-input"
                      placeholder="Years"
                      name="experience"
                      onChange={(e) => {
                        handelInputChange(e);
                      }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="custom-input"
                      placeholder="Education"
                      name="qualification"
                      onChange={(e) => {
                        handelInputChange(e);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="custom-title"> Application Deadline</p>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="date"
                      className="custom-input"
                      name="deadline"
                      onChange={(e) => {
                        handelInputChange(e);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="custom-title"> Job Application Link</p>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td colspan="2">
                    <input
                      type="text"
                      className="custom-input"
                      placeholder="http://"
                      name="jobAppLink"
                      onChange={(e) => {
                        handelInputChange(e);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <p className="custom-title"> Job Description</p>
                  </td>
                  <td></td>
                </tr>
                <tr>
                  <td className="h-[200px]" colspan="2">
                    <textarea
                      rows="10"
                      cols="10"
                      className="border w-full p-5 rounded-[10px]"
                      name="jobDescription"
                      placeholder="Job Description"
                      onChange={(e) => {
                        handelInputChange(e);
                      }}
                    />
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <div className="flex w-full  justify-end">
                      <button
                        className="custom-btn"
                        onClick={(e) => {
                          handelPostjob(e);
                        }}
                      >
                        Post Job
                      </button>
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CreateJob;
