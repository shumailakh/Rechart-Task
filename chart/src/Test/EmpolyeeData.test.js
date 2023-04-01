import { render } from "@testing-library/react";
import EmpolyeeData from "../components/EmpolyeeData";

beforeEach(() => render(<EmpolyeeData />));
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

test("Dashboard Component", () => {
  render(<EmpolyeeData />);
});
test("Renders Dashboard correctly", () => {
  const { queryAllByText } = render(<EmpolyeeData />);
  expect(queryAllByText(/Registered Student/i)).toBeInTheDocument;
});
