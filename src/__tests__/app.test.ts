import { describe, expect, it, beforeAll, vi, afterEach } from "vitest";
import appfunc from "../app.js";
import request from "supertest";
import { type Express } from "express-serve-static-core";

describe("Test the / path", () => {
  let app: Express;

  beforeAll(() => {
    app = appfunc();
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should respond with a 200 status code and correct message", async () => {
    const response = await request(app).get("/");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({ msg: "hello World" });
  });
});