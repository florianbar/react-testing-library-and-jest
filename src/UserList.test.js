import { render, screen, within } from "@testing-library/react";
import UserList from "./UserList";

function renderComponent() {
  const users = [
    { name: "John", email: "john@john.com" },
    { name: "Jane", email: "jane@jane.com" },
  ];

  const { container } = render(<UserList users={users} />);

  return {
    users,
    container,
  };
}

test("render one row per user", () => {
  // Render the component
  // =============================================
  const { container } = renderComponent();

  // Find all the rows in the table
  // =============================================
  // Useful tool: screen.logTestingPlaygroundURL();
  // Method 1: using screen
  const method1Rows = within(screen.getByTestId("users")).getAllByRole("row");
  expect(method1Rows).toHaveLength(2);

  // Method 2: using container
  // eslint-disable-next-line
  const method2Rows = container.querySelectorAll("tbody tr");
  expect(method2Rows).toHaveLength(2);
});

test("render the email and name of each user", () => {
  // Render the component
  // =============================================
  const { container, users } = renderComponent();

  // Find all the rows in the table
  // =============================================

  // Method 1: using container
  // eslint-disable-next-line
  const rows = container.querySelectorAll("tbody tr");
  rows.forEach((row, index) => {
    // eslint-disable-next-line
    const [nameCell, emailCell] = row.querySelectorAll("td");
    expect(nameCell).toHaveTextContent(users[index].name);
    expect(emailCell).toHaveTextContent(users[index].email);
  });

  // Method 2: using screen
  for (let user of users) {
    const name = screen.getByRole("cell", { name: user.name });
    const email = screen.getByRole("cell", { name: user.email });

    expect(name).toBeInTheDocument();
    expect(email).toBeInTheDocument();
  }
});
