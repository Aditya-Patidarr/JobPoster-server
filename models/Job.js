import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      min: 2,
      max: 50,
    },
    userId:{
        type:String,
        required:true
    },
    company:{
        type: String,
        required: true,
        min: 2,
        max: 50,
      },
    jobType:{
        type: String,
        required: true,
        min: 2,
        max: 50,
      },
    minSalary:{
        type: String,
        required: true,
        min: 0,
      },
    maxSalary:{
        type: String,
        required: true,
      },
    applicationDeadline:{
        type: String,
        required: true,
      },
    description: {
      type: String,
      required: true,
      min: 2,
    },
    location: {
      type: String,
      required: true,
      min: 2,
      max: 10,
    },
  },
  { timestamps: true }
);

const Job = mongoose.model("Job", JobSchema);
export default Job;
