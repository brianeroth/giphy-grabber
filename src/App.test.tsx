import axios from "axios";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

describe("when the user types in the search box and presses the button", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("should use axios to call the GIPHY API", () => {
    const spy = jest.spyOn(axios, "get");

    const searchBox = screen.getByPlaceholderText(/search/i);
    const button = screen.getByLabelText(/submit search/i);

    fireEvent.change(searchBox, { target: { value: "test" } });
    fireEvent.click(button);
    fireEvent.change(searchBox, { target: { value: "" } });
    expect(spy).toHaveBeenCalled();
  });

  it("should add the query to the search history row", () => {
    expect(screen.getByText("test")).toBeTruthy();
  });
});
