import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

import App from "./App";

test("can receive a new user and show it on a list", async () => {
  const nameValue = "John";
  const emailValue = "john@john.com";

  // Render component
  render(<App />);

  // Find the name field, click on it, and type the name
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  await user.click(nameInput);
  await user.keyboard(nameValue);

  // Find the email field, click on it, and type the email
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  await user.click(emailInput);
  await user.keyboard(emailValue);

  // Find the button, click on it to submit the form
  const button = screen.getByRole("button");
  await user.click(button);

  // Find the name and email cells in the table
  const nameCell = screen.getByRole("cell", { name: nameValue });
  const emailCell = screen.getByRole("cell", { name: emailValue });

  // Make sure the correct name and email are displayed
  expect(nameCell).toBeInTheDocument();
  expect(emailCell).toBeInTheDocument();
});
