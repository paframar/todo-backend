import { Request, Response } from "express-serve-static-core";
import { Duty } from "../../models/duty";

export const duties: Duty[] = [
  { id: "29", name: "Clean the room" },
  { id: "30", name: "Play videogames" },
  { id: "31", name: "Make challenges." },
  { id: "32", name: "Make challenge tests." },
];

export const request = {} as Request;

const getAllDutiesMock = jest.fn();

export const response = {
  json: getAllDutiesMock.mockResolvedValue(duties),
} as unknown as Response;

export default {
  request,
  response,
  duties,
};
