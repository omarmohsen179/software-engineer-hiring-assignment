// controllers/apartmentController.ts

import { Request, Response } from "express";
import {
  listApartments,
  getApartmentById,
  addApartment,
  deleteApartment,
  updateApartment,
} from "../services/apartmentService";

export async function getListApartments(req: Request, res: Response) {
  try {
    const apartments = await listApartments();
    res.json(apartments);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function getApartmentByIdApi(req: Request, res: Response) {
  const id = parseInt(req.params.id);

  try {
    const apartment = await getApartmentById(id);
    if (!apartment) {
      res.status(404).json({ error: "Apartment not found" });
      return;
    }
    res.json(apartment);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function addApartmentApi(req: Request, res: Response) {
  const apartmentData = req.body;

  if (!apartmentData.name || !apartmentData.description) {
    res.status(400).json({ error: "Name and description are required" });
    return;
  }

  try {
    const newApartment = await addApartment(apartmentData);
    res.status(201).json(newApartment);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function updateApartmentApi(req: Request, res: Response) {
  const apartmentData = req.body;

  if (!apartmentData.name || !apartmentData.description) {
    res.status(400).json({ error: "Name and description are required" });
    return;
  }

  try {
    const newApartment = await updateApartment(apartmentData);
    res.status(201).json(newApartment);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}

export async function deleteApartmentApi(req: Request, res: Response) {
  const id = parseInt(req.params.id);

  try {
    const apartment = await deleteApartment(id);
    if (!apartment) {
      res.status(404).json({ error: "Apartment not found" });
      return;
    }
    res.json(apartment);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
}
