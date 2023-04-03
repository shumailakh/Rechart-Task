import { act, render, screen, within } from "@testing-library/react";
import StudentCreateList from "../components/StudentCreateList";
beforeEach(() => render(<StudentCreateList />));
const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));
beforeEach(() => render(<StudentCreateList />));
async function withFetch() {
  const res = await fetch("http://localhost:8000/student/");
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

test("render Student Details with Field", async () => {
  await act(async () => {
    render(<StudentCreateList />);
  });
});
test("render Student Details with Field", async () => {
  await act(async () => {
    const { queryAllByText } = render(<StudentCreateList />);
    expect(queryAllByText(/New Student List/i)).toBeInTheDocument;
  });
});
