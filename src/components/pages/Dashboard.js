import React, { useContext, useState } from "react";
import ImportantDevicesIcon from "@mui/icons-material/ImportantDevices";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Typewriter from "typewriter-effect";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { ContextProvider } from "../../Context";
import { Link } from "react-router-dom";
let categoryData = [
  {
    categoryName: "Technology",
    icon: <ImportantDevicesIcon />,
  },
  {
    categoryName: "Technology",
    icon: <ImportantDevicesIcon />,
  },
  {
    categoryName: "Technology",
    icon: <ImportantDevicesIcon />,
  },
  {
    categoryName: "Technology",
    icon: <ImportantDevicesIcon />,
  },
  {
    categoryName: "Technology",
    icon: <ImportantDevicesIcon />,
  },
  {
    categoryName: "Technology",
    icon: <ImportantDevicesIcon />,
  },
  {
    categoryName: "Technology",
    icon: <ImportantDevicesIcon />,
  },
  {
    categoryName: "Technology",
    icon: <ImportantDevicesIcon />,
  },
  {
    categoryName: "Technology",
    icon: <ImportantDevicesIcon />,
  },
  {
    categoryName: "Technology",
    icon: <ImportantDevicesIcon />,
  },
];

const Dashboard = () => {
  let [size, setSize] = useState(4);
  let { jobList, setJobList } = useContext(ContextProvider);

  console.log(jobList?.data);

  let filterJob = jobList?.data.slice(0, size);

  console.log(filterJob);
  return (
    <div className=" pb-10">
      <div className="banner-container custom-px pt-[200px] ">
        <div className="w-[650px]  flex flex-col gap-10  ">
          <div className="text-[70px] leading-[80px]  ">
            <h3 className="mb-5">
              <Typewriter
                options={{
                  strings: ["Find A Job ", "Apply Online", "Get Hire !!!"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
          </div>
          <div>
            <p className="text-[#616161] text-[20px] font-[400] leading-8">
              Hand-picked opportunities to work from home, remotely, freelance,
              full-time, part-time, contract and internships.
            </p>{" "}
          </div>
          <div className="w-[650px] h-[60px]   flex ">
            <input
              type="text"
              className="h-full w-full outline-none px-5"
              placeholder="Search by job title......................"
            />
            <button className="rounded-r-lg bg-[#338573] h-full w-[186px] text-[#fff] transition duration-300 opacity-95 hover:opacity-100">
              {" "}
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="h-[671px] w-full bg-[#F6F7FA] custom-px ">
        <div className=" w-full h-[10%] flex items-center justify-center ">
          <p className="text-[30px] font-[600]">Popular Categories </p>{" "}
        </div>
        <div className=" h-[70%] w-full grid grid-cols-2 md:grid-cols-5 place-items-center">
          {categoryData?.map((item) => {
            return (
              <>
                <div className="w-[232px] h-[191px] bg-[#fff] flex items-center justify-center shadow-sm hover:scale-110 transition duration-300 cursor-pointer">
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-[73px] w-[73px] bg-cyan-300 rounded-full flex items-center justify-center">
                      {item.icon}
                    </div>{" "}
                    <p>{item.categoryName}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="my-5 w-full bg-[#fff] custom-px ">
        <div className=" w-full h-[10%] flex items-center justify-center ">
          <p className=" mb-5 text-[30px] font-[600] ">
            All Popular Listed jobs{" "}
          </p>{" "}
        </div>
        <div className=" w-full flex gap-5 flex-col    ">
          {filterJob?.map((item) => {
            return (
              <div className="border h-[135px] w-full  bg-[#FFFFFF] rounded-[10px] shadow-md flex justify-between items-center px-10 ">
                <div className="flex gap-5">
                  <div className="h-[91px] w-[92px] bg-[#338573] rounded-full flex items-center justify-center ">
                    <PhoneIphoneIcon
                      sx={{ fontSize: 50 }}
                      className="text-[#fff] "
                    />
                  </div>
                  <div className=" flex flex-col justify-center">
                    <div>
                      <p className="text-[#5F5858] font-[400] text-[16px]">
                        {item?.companyName}
                      </p>
                    </div>
                    <div>
                      <p className="text-[22px]">
                        {item?.jobTitle} ({item?.experience})
                      </p>
                    </div>
                    <div className="flex gap-4 text-[15px] font-[400]">
                      <div className="flex">
                        <LocationOnIcon className="icon-green" />{" "}
                        <p> {item?.location}</p>
                      </div>
                      <div className="flex">
                        <AccessTimeIcon className="icon-green" />{" "}
                        <p> {item?.jobType}</p>
                      </div>
                      <div className="flex">
                        <CurrencyRupeeIcon className="icon-green" />{" "}
                        <p> {item?.salaryRange}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Link to={`/Job-Details/${item?._id}`}>
                    <button className="custom-btn "> View Details</button>
                  </Link>
                </div>
              </div>
            );
          })}
          <div className="w-full  flex  items-center justify-center mt-5">
            <button
              className="animate-bounce h-[50px] w-[50px] rounded-full border"
              onClick={() => {
                setSize(size + 3);
              }}
            >
              <KeyboardDoubleArrowDownIcon />
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
