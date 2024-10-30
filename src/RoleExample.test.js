import { render, screen } from "@testing-library/react";

import RoleExample from "./RoleExample";

test("can find elements by role", () => {
  render(<RoleExample />);

  const roles = [
    "link",
    "button",
    "contentinfo",
    "heading",
    "banner",
    "img",
    "textbox",
    "checkbox",
    "radio",
    "spinbutton",
    "listitem",
    "list",
  ];

  roles.forEach((role) => {
    const element = screen.getByRole(role);
    expect(element).toBeInTheDocument();
  });
});
