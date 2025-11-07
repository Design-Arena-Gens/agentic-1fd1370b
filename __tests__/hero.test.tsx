import { fireEvent, render, screen } from "@testing-library/react";
import { Hero } from "@/components/Hero";

describe("Hero", () => {
  it("updates persona narrative when selecting a different persona", () => {
    render(<Hero />);

    const revenueButton = screen.getByRole("button", {
      name: /revenue teams/i
    });

    fireEvent.click(revenueButton);

    expect(
      screen.getByText(/align marketing, sales, and success/i)
    ).toBeInTheDocument();
  });
});
