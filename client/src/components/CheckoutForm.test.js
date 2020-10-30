import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    //arrange
    render(<CheckoutForm />);

    //act
    const header = screen.getByText(/checkout form/i);

    //assert
    expect(header).toBeInTheDocument();
  });

test("form shows success message on submit with form details", () => {
  render(<CheckoutForm />);
  // Act
  const firstName = screen.getByLabelText(/First Name:/i);
  const lastName = screen.getByLabelText(/Last Name:/i);
  const address = screen.getByLabelText(/Address:/i);
  const city = screen.getByLabelText(/City:/i);
  const state = screen.getByLabelText(/State:/i);
  const zip = screen.getByLabelText(/Zip:/i);

  // Assert
  fireEvent.change(firstName, { target: { value: "Elijah" } });
  fireEvent.change(lastName, { target: { value: "Elliott" } });
  fireEvent.change(address, { target: { value: "6109 Parisa Ave" } });
  fireEvent.change(city, { target: { value: "Riverside" } });
  fireEvent.change(state, { target: { value: "CA" } });
  fireEvent.change(zip, { target: { value: "92507" } });

  const checkout = screen.getByRole("button", { name: /checkout/i });
  fireEvent.click(checkout);
});
