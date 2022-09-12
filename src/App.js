import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import CreateAccount from "./components/pages/CreateAccount";
import CreateJob from "./components/pages/CreateJob";
import Dashboard from "./components/pages/Dashboard";
import JobDetails from "./components/pages/JobDetails";
import JobList from "./components/pages/JobList";
import Login from "./components/pages/Login";
import Context from "./Context";

function App() {
  return (
    <>
      <Context>
        <div className="h-screen w-full relative">
          <div className="h-[60px] fixed w-full top-0 z-50 ">
            <Header />
          </div>
          <div className=" z-40">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/create-account" element={<CreateAccount />} />
              <Route path="/login" element={<Login />} />
              <Route path="/create-job" element={<CreateJob />} />
              <Route path="/job-list/:userName" element={<JobList />} />
              <Route path="/Job-Details/:id" element={<JobDetails />} />
            </Routes>
          </div>
          <div className="h-[60px]  w-full bottom-0 ">
            <Footer />
          </div>
        </div>
      </Context>
    </>
  );
}

export default App;
