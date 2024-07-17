import getDutiesMocks from "../__mocks__/dutyController.test/getDutiesMocks";
import addDutiesMocks from "../__mocks__/dutyController.test/addDutiesMocks";
import { getAllDuties } from "../services/dutyService";
import {
  getDuties,
  addDuty,
  editDuty,
  removeDuty,
} from "../controllers/dutyController";
import { get } from "http";

describe("getDuties", () => {
  const { request, response, duties } = getDutiesMocks;

  it("should return a duties array", async () => {
    await getDuties(request, response);
    expect(response.json).toHaveBeenCalledTimes(1);
  });
});

describe("addDuty", () => {
  const { request, response, duty } = addDutiesMocks;

  it("should add a new duty and return it", async () => {
    await addDuty(request, response);
    expect(response.status).toHaveBeenCalledWith(201);
  });
});
