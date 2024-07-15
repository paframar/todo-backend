import request from "supertest";
import express from "express";
import dutyRoutes from "../routes/dutyRoutes";
import bodyParser from "body-parser";
import cors from "cors";

// Mock the dutyService module
jest.mock("../services/dutyService");

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use("/api/v1", dutyRoutes);

describe("Duty Routes", () => {
  it("should get all duties", async () => {
    const response = await request(app).get("/api/v1/duties");
    expect(response.status).toBe(200);
    // Add more assertions based on the expected response
  });

  it("should add a new duty", async () => {
    const response = await request(app)
      .post("/api/v1/duties")
      .send({ name: "Test Duty" });
    expect(response.status).toBe(201);
    // Add more assertions based on the expected response
  });

  it("should edit a duty", async () => {
    const response = await request(app)
      .put("/api/v1/duties")
      .send({ id: "1", name: "Updated Duty" });
    expect(response.status).toBe(200);
    // Add more assertions based on the expected response
  });

  it("should delete a duty", async () => {
    const response = await request(app).delete("/api/v1/duties/1");
    expect(response.status).toBe(200);
    // Add more assertions based on the expected response
  });
});
