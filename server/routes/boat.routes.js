import express from "express";
const router = express.Router();
import { getBoats, getBoat } from '../controllers/boat.controller.js';

router.get('/', getBoats);
router.get('/:id', getBoat);

export default router;
