import fetchMock from "jest-fetch-mock";
import { getDirections } from "../src/fetchData/getDirections";

fetchMock.enableMocks();

describe("getDirections", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("returns directions when origin and destination are provided", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        routes: [
          {
            legs: [
              {
                duration: { text: "1 hour", value: 3600 },
                distance: { text: "50 km", value: 50000 },
                start_address: "Origin Address",
                start_location: { lat: 0, lng: 0 },
                end_address: "Destination Address",
                end_location: { lat: 1, lng: 1 },
              },
            ],
          },
        ],
      })
    );

    const result = await getDirections("origin", "destination");
    expect(result).toEqual({
      success: {
        routes: [
          {
            legs: [
              {
                duration: { text: "1 hour", value: 3600 },
                distance: { text: "50 km", value: 50000 },
                start_address: "Origin Address",
                start_location: { lat: 0, lng: 0 },
                end_address: "Destination Address",
                end_location: { lat: 1, lng: 1 },
              },
            ],
          },
        ],
      },
    });
  });

  it("returns an error when fetch fails", async () => {
    fetchMock.mockReject(new Error("Failed to fetch"));

    const result = await getDirections("origin", "destination");
    expect(result).toEqual({ error: "Failed to call API" });
  });
});
