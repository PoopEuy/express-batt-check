// import express
import express from "express";

// import page controller
import { Home, About, Contact, botStart } from "../controllers/page.js";
import { getRealtime, getSiteDown } from "../controllers/realtimeController.js";
import {
  getRealtimeLama,
  getSiteDownLama,
} from "../controllers/realtimeLamaController.js";

import {
  getDetailsSites,
  getBattLost,
} from "../controllers/battCheckController.js";
// init express router
const router = express.Router();

// Home route
router.get("/", Home);

// About route
router.get("/about", About);

// Contact route
router.get("/contact", Contact);

//start Bot
router.get("/botStart", botStart);

//realtime
router.get("/getRealtime", getRealtime);
router.get("/getSiteDown", getSiteDown);
router.get("/getRealtimeLama", getRealtimeLama);
router.get("/getSiteDownLama", getSiteDownLama);

//detail
router.get("/getDetailsSites", getDetailsSites);
router.get("/getBattLost", getBattLost);

// export default router
export default router;
