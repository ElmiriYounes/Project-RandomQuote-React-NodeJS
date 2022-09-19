import Button from "../Button";
import React from "react";
import { render, screen } from "@testing-library/react";
import * as ReactDOM from "react-dom";

describe("Button component tests", () => {
  let container: HTMLSpanElement;

  beforeEach(() => {
    container = document.createElement("span");
    document.body.appendChild(container);
    ReactDOM.render(<Button text="Click me" />, container);
  });

  afterEach(() => {
    document.body.removeChild(container);
    container.remove();
  });

  it("Renders correctly intial document", () => {
    const buttons = container.querySelectorAll("button");
    expect(buttons).toHaveLength(1);
  });
});

