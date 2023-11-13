import {
  InputNumericButton,
  InputNumericContainer,
  InputNumericContent,
} from "@/components/styledComponents/Input/Numeric";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Input Numeric component", () => {
  test("should render Input Numeric Container with properties default value", (done) => {
    const { getByText } = render(
      <InputNumericContainer>test</InputNumericContainer>,
    );

    const containerElement = getByText("test");

    expect(containerElement).toBeInTheDocument();
    expect(containerElement).toHaveStyle("border-radius: 4px");
    expect(containerElement).toHaveStyle("display: flex");
    expect(containerElement).toHaveStyle("border: 0.3px solid #bfbfbf");
    expect(containerElement).toHaveStyle("background: #fff");
    done();
  });

  test("should render Input Numeric Button with properties default value", (done) => {
    const { getByText } = render(<InputNumericButton>test</InputNumericButton>);

    const buttonElement = getByText("test");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle("display: flex");
    expect(buttonElement).toHaveStyle("flex-grow: 1");
    expect(buttonElement).toHaveStyle("align-items: center");
    expect(buttonElement).toHaveStyle("justify-content: center");
    expect(buttonElement).toHaveStyle("padding: 8px");
    done();
  });

  test("should render Input Numeric Content with properties default value", (done) => {
    const { getByText } = render(
      <InputNumericContent>test</InputNumericContent>,
    );

    const buttonElement = getByText("test");

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveStyle("flex-grow: 1");
    expect(buttonElement).toHaveStyle("display: flex");
    expect(buttonElement).toHaveStyle("align-items: center;");
    expect(buttonElement).toHaveStyle("justify-content: center");
    expect(buttonElement).toHaveStyle("padding: 8px");
    done();
  });
});
