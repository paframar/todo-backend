import { Request, Response } from "express";
import { getAllDuties, createDuty, updateDuty } from "../services/dutyService";

export const getDuties = async (req: Request, res: Response) => {
  try {
    const duties = await getAllDuties();
    res.json(duties);
  } catch (error: unknown) {
    let errorMessage = "Unknown error";
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === "string") {
      errorMessage = error;
    } else if (
      typeof error === "object" &&
      error !== null &&
      "message" in error
    ) {
      errorMessage = (error as any).message;
    }
    res.status(500).json({ error: errorMessage });
  }
};

export const addDuty = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const newDuty = await createDuty(name);
    res.status(201).json(newDuty);
  } catch (error: unknown) {
    let errorMessage = "Unknown error";
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === "string") {
      errorMessage = error;
    } else if (
      typeof error === "object" &&
      error !== null &&
      "message" in error
    ) {
      errorMessage = (error as any).message;
    }
    res.status(500).json({ error: errorMessage });
  }
};

export const editDuty = async (req: Request, res: Response) => {
  try {
    const { id, name } = req.body;
    const updatedDuty = await updateDuty(id, name);
    res.json(updatedDuty);
  } catch (error: unknown) {
    let errorMessage = "Unknown error";
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === "string") {
      errorMessage = error;
    } else if (
      typeof error === "object" &&
      error !== null &&
      "message" in error
    ) {
      errorMessage = (error as any).message;
    }
    res.status(500).json({ error: errorMessage });
  }
};

import { Request, Response } from "express";
import { deleteDuty } from "../services/dutyService";

export const removeDuty = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deletedDuty = await deleteDuty(id);
    if (deletedDuty) {
      res.json(deletedDuty);
    } else {
      res.status(404).json({ message: "Duty not found" });
    }
  } catch (error: unknown) {
    let errorMessage = "Unknown error";
    if (error instanceof Error) {
      errorMessage = error.message;
    } else if (typeof error === "string") {
      errorMessage = error;
    } else if (
      typeof error === "object" &&
      error !== null &&
      "message" in error
    ) {
      errorMessage = (error as any).message;
    }
    res.status(500).json({ error: errorMessage });
  }
};
