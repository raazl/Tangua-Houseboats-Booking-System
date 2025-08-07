import express from "express";
const router = express.Router();
import { getPackages, getPackage, createPackage } from "../controllers/package.controller.js";
router.get('/', getPackages);
router.get('/:id', getPackage);
router.post('/', createPackage);

export default router;
