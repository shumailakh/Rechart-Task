import { render, act } from "@testing-library/react";
import Dashboard from "../pages/Dashboard";
import Charts from "../components/Charts/Charts";
beforeEach(() => render(<Dashboard />));
async function withFetch() {
  const res = await fetch("http://localhost:8000/user");
  const json = await res.json();

  return json;
}
// This is the section where we mock `fetch`
const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = () =>
    Promise.resolve({
      json: () => Promise.resolve([]),
    });
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

test("works", async () => {
  const json = await withFetch();
  expect(Array.isArray(json)).toEqual(true);
  expect(json.length).toEqual(0);
});

test("render Dashboard", async () => {
  await act(async () => {
    render(<Dashboard />);
  });
});

test("chart Component", () => {
  render(<Charts />);
});
