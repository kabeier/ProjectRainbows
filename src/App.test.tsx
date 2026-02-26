import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

function renderWithRouter(initialPath = "/") {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <App />
    </MemoryRouter>
  );
}

test("renders the home page", () => {
  renderWithRouter("/");

  expect(
    screen.getByRole("heading", { name: /projectsparks/i })
  ).toBeInTheDocument();
});

test("renders the nav links", () => {
  renderWithRouter("/");

  expect(screen.getByRole("link", { name: /home/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /projects/i })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /about/i })).toBeInTheDocument();
});

test("navigates to About page", async () => {
  const user = userEvent.setup();
  renderWithRouter("/");

  await user.click(screen.getByRole("link", { name: /about/i }));

  expect(screen.getByRole("heading", { name: /about/i })).toBeInTheDocument();
});

test("shows 404 for unknown routes", () => {
  renderWithRouter("/some-garbage-route");

  expect(screen.getByRole("heading", { name: /404/i })).toBeInTheDocument();
});
