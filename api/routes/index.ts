// routes.ts

import express, { Router } from "express";
import {
  getListApartments,
  getApartmentByIdApi,
  addApartmentApi,
  deleteApartmentApi,
  updateApartmentApi,
} from "../controllers/apartmentController";

const router: Router = express.Router();

// Define your routes
router.get("/apartments", getListApartments);
router.get("/apartments/:id", getApartmentByIdApi);
router.post("/apartments", addApartmentApi);
router.put("/apartments", updateApartmentApi);
router.delete("/apartments/:id", deleteApartmentApi);
export default router;
