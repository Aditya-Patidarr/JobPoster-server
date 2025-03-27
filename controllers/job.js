import Job from "../models/Job.js";
import User from "../models/User.js";
export const getJobs = async (req,res)=>{
    try {
        const jobs = await Job.find();
        res.status(200).json(jobs);
      } catch (err) {
        res.status(404).json({ message: err.message });
      }
}
export const createJob = async (req,res)=>{
    try {
       const user= await User.findOne({email:"aditya@gmail.com"});
       const data = {...req.body,userId: user._id}
       const newJob = new Job(data);
       await newJob.save();
       res.status(201).json({ message: 'Job created successfully', job: newJob });
      } catch (err) {
        res.status(409).json({ message: err.message });
      }
}
