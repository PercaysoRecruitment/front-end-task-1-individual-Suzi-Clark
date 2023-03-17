import Home from "@/pages";
import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'

test("homepage does not render EndGame message on load", () => {
  render(<Home />);
  const endMessage = screen.queryByText(/won/i);
  expect(endMessage).toBeNull();
});

test("homepage has H1 heading", () => {
  render(<Home />);
  expect(screen.getByRole('heading', {level: 1})).toHaveTextContent(/noughts/i)
});
