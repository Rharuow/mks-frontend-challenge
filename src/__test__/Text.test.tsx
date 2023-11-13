import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { P, Span } from "@/components/styledComponents/Text";

describe("Text Component", () => {
  test("renders paragraph component with defaults properties: color > rgb(255,255,255), font-weight > 400 and font-size > 16px and contains 'Test' as children text", (done) => {
    const { getByText } = render(<P>Test</P>);

    const paragraphElement = getByText("Test");
    // Access the computed styles of the paragraph element
    const styles = getComputedStyle(paragraphElement);

    expect(paragraphElement).toBeInTheDocument();

    // Make assertions based on the computed styles
    expect(styles.color).toBe("rgb(255, 255, 255)");
    expect(styles.fontWeight).toBe("400");
    expect(styles.fontSize).toBe("16px");

    done();
  });

  test("renders paragraph component with color > red, font-weight > 700 and font-size > 24px and contains 'Test' as children text", (done) => {
    const { getByText } = render(
      <P $textColor="red" $fontSize={24} $fontWeight={700}>
        Test
      </P>,
    );

    const paragraphElement = getByText("Test");
    // Access the computed styles of the paragraph element
    const styles = getComputedStyle(paragraphElement);

    expect(paragraphElement).toBeInTheDocument();

    // Make assertions based on the computed styles
    expect(styles.color).toBe("red");
    expect(styles.fontWeight).toBe("700");
    expect(styles.fontSize).toBe("24px");

    done();
  });

  test("renders span component with defaults properties: color > rgb(255,255,255), font-weight > 400 and font-size > 16px and contains 'Test' as children text", (done) => {
    const { getByText } = render(<Span>Test</Span>);

    const spanElement = getByText("Test");
    // Access the computed styles of the span element
    const styles = getComputedStyle(spanElement);

    expect(spanElement).toBeInTheDocument();

    // Make assertions based on the computed styles
    expect(styles.color).toBe("rgb(255, 255, 255)");
    expect(styles.fontWeight).toBe("400");
    expect(styles.fontSize).toBe("16px");

    done();
  });

  test("renders span component with color > red, font-weight > 700 and font-size > 24px and contains 'Test' as children text", (done) => {
    const { getByText } = render(
      <Span $textColor="red" $fontSize={24} $fontWeight={700}>
        Test
      </Span>,
    );

    const spanElement = getByText("Test");
    // Access the computed styles of the span element
    const styles = getComputedStyle(spanElement);

    expect(spanElement).toBeInTheDocument();

    // Make assertions based on the computed styles
    expect(styles.color).toBe("red");
    expect(styles.fontWeight).toBe("700");
    expect(styles.fontSize).toBe("24px");

    done();
  });
});
