import { FooterLayout } from "@/components/ui/FooterLayout";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("Footer Layout Component", () => {
  test("render a span with text 'MKS sistemas © Todos os direitos reservados'", (done) => {
    const { getByText } = render(<FooterLayout />);

    const spanElement = getByText(
      "MKS sistemas © Todos os direitos reservados",
    );

    expect(spanElement).toBeInTheDocument();
    done();
  });

  test("render a span with text color #000", (done) => {
    const { getByText } = render(<FooterLayout />);

    const spanElement = getByText(
      "MKS sistemas © Todos os direitos reservados",
    );

    expect(spanElement).toHaveStyle("color: #000");
    done();
  });

  test("render a span with text size 12", (done) => {
    const { getByText } = render(<FooterLayout />);

    const spanElement = getByText(
      "MKS sistemas © Todos os direitos reservados",
    );

    expect(spanElement).toHaveStyle("font-size: 12px");
    done();
  });
});
