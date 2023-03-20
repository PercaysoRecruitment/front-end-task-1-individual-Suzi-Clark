import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import EndGame from "@/components/EndGame";

describe("EndGame", () => {
  const winner = "X's Won";

  test("renders h2 with winner text", () => {
    render(<EndGame winner={winner} />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(winner);
  });
  test("renders button with 'Play Again?' text", () => {
    render(<EndGame winner={winner} />);
    expect(screen.getByRole("button")).toHaveTextContent('Play Again?');
  });
});
