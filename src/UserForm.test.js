import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import UserForm from "./UserForm";

test("it shows 2 inputs and a button", () => {
  // render the component
  // =============================================
  render(<UserForm />);

  // manipulate the component or find a specific element
  // =============================================
  const inputs = screen.getAllByRole("textbox");
  const button = screen.getByRole("button");

  // Assertion - make sure the component is doing what it's supposed to do
  // =============================================
  expect(inputs).toHaveLength(2);
  expect(button).toBeInTheDocument();
});

test("it calls onUserAdd when the form is submitted", async () => {
  const nameValue = "John";
  const emailValue = "john@john.com";

  const onUserAddMock = jest.fn();

  // Try to render my component
  // =============================================
  render(<UserForm onUserAdd={onUserAddMock} />);

  // Find the 2 inputs
  // =============================================
  const nameInput = screen.getByRole("textbox", { name: /name/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });

  // Simulate typing in a name
  // =============================================
  await user.click(nameInput);
  await user.keyboard(nameValue);

  // Simulate typing in an email
  // =============================================
  await user.click(emailInput);
  await user.keyboard(emailValue);

  // Assertion: Make sure the inputs have the correct values
  // =============================================
  expect(nameInput).toHaveValue(nameValue);
  expect(emailInput).toHaveValue(emailValue);

  // Find the button
  // =============================================
  const button = screen.getByRole("button");

  // Simulate clicking the button
  // =============================================
  await user.click(button);

  // Assertion: Make sure onUserAdd was called with email and name
  // =============================================
  expect(onUserAddMock).toHaveBeenCalled();
  expect(onUserAddMock).toHaveBeenCalledWith({
    name: nameValue,
    email: emailValue,
  });
});

test("it clears both input fields after the form is submitted", async () => {
  const nameValue = "John";
  const emailValue = "john@john.com";

  render(<UserForm onUserAdd={() => {}} />);

  const nameInput = screen.getByRole("textbox", { name: /name/i });
  await user.click(nameInput);
  await user.keyboard(nameValue);

  const emailInput = screen.getByRole("textbox", { name: /email/i });
  await user.click(emailInput);
  await user.keyboard(emailValue);

  const button = screen.getByRole("button");
  await user.click(button);

  expect(nameInput).toHaveValue("");
  expect(emailInput).toHaveValue("");
});
