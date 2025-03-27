import express from "express";
const router = express.Router();
import {createJob,getJobs} from "../controllers/job.js"

router.get("/getjobs",  getJobs);
router.post("/createjob", createJob);


export default router;
