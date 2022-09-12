import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { ContextProvider } from "../../Context";

const JobDetails = () => {
  let { jobList, setJobList } = useContext(ContextProvider);
  let paramId = useParams().id;

  let jobById = jobList?.data?.filter((x) => x._id === paramId);
  console.log(jobById);
  return (
    <>
      {!jobById ? (
        "Empty"
      ) : (
        <div>
          <div className="h-[80px] bg-[#F4F5F7] w-full mt-[60px] text-[25px] font-[600] flex items-center justify-center ">
            <p>
              {jobById[0]?.jobTitle} <span>({jobById[0]?.jobType})</span>-{" "}
              <span>{jobById[0]?.companyName}</span>
            </p>
          </div>
          <div className="h-[700px] custom-px overflow-scroll">
            <div className="mt-5  flex items-center justify-center gap-5">
              <button className="custom-btn  bg-[#fff] text-[#000000] border border-[#AAAAAA]">
                View Company
              </button>{" "}
              <button className="custom-btn">Apply This Job</button>{" "}
            </div>
            <div className=" w-[450px]  mt-5">
              <table className="jobDetail-table">
                <tr>
                  <td>Minimum Qualification:</td>
                  <td> {jobById[0]?.qualification} </td>
                </tr>
                <tr>
                  <td>Experience Level:</td>
                  <td>Mid level</td>
                </tr>
                <tr>
                  <td>Experience Length: </td>
                  <td>{jobById[0]?.experience}</td>
                </tr>
                <tr>
                  <td>Location: </td>
                  <td>{jobById[0]?.location}</td>
                </tr>
                <tr>
                  <td>Application Deadline:</td>
                  <td>{jobById[0]?.deadline}</td>
                </tr>
                <tr>
                  <td>Salary Range: </td>
                  <td>{jobById[0]?.salaryRange} P.A</td>
                </tr>
              </table>
            </div>
            <div className="py-[30px]">
              <h5>Job description</h5>
              <p className="leading-7 pt-5">
                We are searching for a Laravel developer to build web
                applications for our company. In this role, you will design and
                create projects using Laravel framework and PHP, and assist the
                team in delivering high-quality web applications, services, and
                tools for our business. To ensure success as a Laravel developer
                you should be adept at utilizing Laravel's GUI and be able to
                design a PHP application from start to finish. A top-notch
                Laravel developer will be able to leverage their expertise and
                experience of the framework to independently produce complete
                solutions in a short turnaround time.
                <br />
                <span className="font-semibold">
                  {" "}
                  - Job Post By {jobById[0]?.jobPostBy}
                </span>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JobDetails;
