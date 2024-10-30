import { render, screen } from "@testing-library/react";

import AccessibleName from "./AccessibleName";

test("can select by accessible name", () => {
  render(<AccessibleName />);

  const inputName = screen.getByLabelText(/name/i);
  const inputEmail = screen.getByLabelText(/email/i);
  const submitButton = screen.getByRole("button", { name: /submit/i });
  const cancelButton = screen.getByRole("button", { name: /cancel/i });

  expect(inputName).toBeInTheDocument();
  expect(inputEmail).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
  expect(cancelButton).toBeInTheDocument();
});
