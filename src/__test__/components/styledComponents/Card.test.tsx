import { CardContainer } from "@/components/styledComponents/Card";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Card Component", () => {
  test("render a card with default properties", (done) => {
    const { getByTestId } = render(
      <CardContainer data-testid="card-container" />,
    );

    const cardElement = getByTestId("card-container");

    expect(cardElement).toBeInTheDocument();
    expect(cardElement).toHaveStyle("border-radius: 8px;");
    expect(cardElement).toHaveStyle("background: #fff;");
    expect(cardElement).toHaveStyle(
      "box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);",
    );
    done();
  });
});
