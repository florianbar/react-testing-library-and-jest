import { render, screen } from "@testing-library/react";

import QueryFunctions from "./QueryFunctions";

test("getBy, queryBy, findBy finding 0 elements", async () => {
  render(<QueryFunctions />);

  expect(() => screen.getByRole("textbox")).toThrow();

  const queryResult = screen.queryByRole("textbox");
  expect(queryResult).toBeNull();

  let errorThrown = false;
  try {
    await screen.findByRole("textbox");
  } catch (error) {
    errorThrown = true;
  }
  expect(errorThrown).toBe(true);
});
