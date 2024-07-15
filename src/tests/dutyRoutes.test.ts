import request from "supertest";
import express from "express";
import dutyRoutes from "../routes/dutyRoutes";
import bodyParser from "body-parser";
import cors from "cors";
import { createDuty, deleteDuty } from "../services/dutyService";

jest.mock("../services/dutyService");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api/v1", dutyRoutes);

describe("Duty Routes", () => {
  let dutyId: string;

  beforeAll(async () => {
    const createdDuty = await createDuty("Test Duty");
    console.log("createdDuty ", createdDuty);
    dutyId = createdDuty.id;
  });

  it("should get all duties", async () => {
    const response = await request(app).get("/api/v1/duties");
    expect(response.status).toBe(200);
  });

  it("should add a new duty", async () => {
    const response = await request(app)
      .post("/api/v1/duties")
      .send({ name: "Test Duty" });
    expect(response.status).toBe(201);
  });

  it("should edit a duty", async () => {
    const response = await request(app)
      .put("/api/v1/duties")
      .send({ id: "1", name: "Updated Duty" });
    expect(response.status).toBe(200);
  });

  it("should delete a duty", async () => {
    const response = await request(app).delete(`/api/v1/duties/${dutyId}`);
    expect(response.status).toBe(200);
  });

  afterAll(async () => {
    await deleteDuty(dutyId);
  });
});
