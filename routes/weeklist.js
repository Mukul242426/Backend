import express from "express"
import { isLoggedIn ,isAuthorised} from "../middlewares/auth.js";
import { createWeekList } from "../controllers/weeklist.js";
import { updateWeekList } from "../controllers/weeklist.js";

const router=express.Router();

router.post('/user/create/weeklist',isLoggedIn,createWeekList)

router.post('/user/update/weeklist',isLoggedIn,isAuthorised,updateWeekList)

export default router;
