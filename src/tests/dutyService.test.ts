import {
  getAllDuties,
  createDuty,
  updateDuty,
  deleteDuty,
} from "../services/dutyService";
import pool from "../database";

jest.mock("../database", () => ({
  query: jest.fn(),
}));

describe("Duty Service", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should get all duties", async () => {
    const mockDuties = [{ id: 1, name: "Test Duty" }];
    (pool.query as jest.Mock).mockResolvedValue({ rows: mockDuties });

    const duties = await getAllDuties();
    expect(duties).toEqual(mockDuties);
  });

  it("should create a duty", async () => {
    const mockDuty = { id: 1, name: "Test Duty" };
    (pool.query as jest.Mock).mockResolvedValue({ rows: [mockDuty] });

    const duty = await createDuty("Test Duty");
    expect(duty).toEqual(mockDuty);
  });

  it("should update a duty", async () => {
    const mockDuty = { id: 1, name: "Updated Duty" };
    (pool.query as jest.Mock).mockResolvedValue({ rows: [mockDuty] });

    const duty = await updateDuty("1", "Updated Duty");
    expect(duty).toEqual(mockDuty);
  });

  it("should delete a duty", async () => {
    const mockDuty = { id: 1, name: "Test Duty" };
    (pool.query as jest.Mock).mockResolvedValue({ rows: [mockDuty] });

    const duty = await deleteDuty("1");
    expect(duty).toEqual(mockDuty);
  });
});
