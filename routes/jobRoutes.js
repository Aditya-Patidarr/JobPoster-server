import express from "express";
const router = express.Router();
import {createJob,getJobs} from "../controllers/job.js"

router.get("/",  getJobs);
router.post("/jobs", createJob);


export default router;
