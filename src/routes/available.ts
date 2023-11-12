import { Router } from "express";
import { create, getByUserId, getAll } from "../controllers/available";


const router = Router();

router.get("/getting", getAll);
router.get("/getting/:userId", getByUserId);

router.post("/creating", create);

export default router;