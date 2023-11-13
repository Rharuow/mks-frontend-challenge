import "jest-canvas-mock";
import "@testing-library/jest-dom";
import { HeaderLayout } from "@/components/ui/HeaderLayout";
import { render } from "@testing-library/react";

describe("HeaderLayout componente", () => {
  test("should render HeaderConatiner", (done) => {
    const { getByTestId } = render(<HeaderLayout />);

    const headerContainerElement = getByTestId("header-container");

    expect(headerContainerElement).toBeInTheDocument();
    done();
  });

  test("should render tow spans, one of them with 'MKS' and the second with 'Sistemas'", (done) => {
    const { getByText } = render(<HeaderLayout />);

    const firstTextElement = getByText("MKS", { exact: false });
    const secondTextElement = getByText("Sistemas");

    expect(firstTextElement).toBeInTheDocument();
    expect(secondTextElement).toBeInTheDocument();
    done();
  });

  test("should render a shopping cart icon and 0 items at header button cart", (done) => {
    const { getByTestId } = render(<HeaderLayout />);

    const buttonShoppingCart = getByTestId("button-shopping-cart");

    expect(buttonShoppingCart).toBeInTheDocument();
    expect(buttonShoppingCart.tagName).toBe("BUTTON");
    expect(buttonShoppingCart.textContent).toMatch("0");
    expect(buttonShoppingCart.children.item(0)?.tagName).toBe("svg");
    expect(buttonShoppingCart.children.item(0)?.getAttribute("class")).toBe(
      "lucide lucide-shopping-cart",
    );
    done();
  });
});
