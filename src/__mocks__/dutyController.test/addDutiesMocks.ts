import { Request, Response } from "express-serve-static-core";
import { Duty } from "../../models/duty";

const duty: Partial<Duty> = {
  name: "New Duty",
};

const request = {
  body: {
    name: "New Duty",
  },
} as unknown as Request;

const response = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
} as unknown as Response;

export default {
  request,
  response,
  duty,
};
