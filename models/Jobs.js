const mongoose = require("mongoose");

const JobsSchema = new mongoose.Schema({
  jobPostBy: {
    type: String,
  },
  companyName: {
    type: String,
  },
  deadline: {
    type: Date,
  },
  experience: {
    type: String,
  },
  jobAppLink: {
    type: String,
  },
  jobCategory: {
    type: String,
  },
  jobDescription: {
    type: String,
  },
  jobTitle: {
    type: String,
  },
  jobType: {
    type: String,
  },
  location: {
    type: String,
  },
  qualification: {
    type: String,
  },
  salaryRange: {
    type: String,
  },
  website: {
    type: String,
  },
});

const Jobs = mongoose.model("Jobs", JobsSchema);
module.exports = Jobs;
