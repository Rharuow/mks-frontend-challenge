import "@testing-library/jest-dom";
import { Button } from "@/components/styledComponents/Button";
import { render } from "@testing-library/react";

beforeAll(() => {
  const style = document.createElement("style");
  style.innerHTML = `
    :root {
      --primary: #0f52ba;
      --secondary: #eeeeee;
      --dark: #373737;
      --text-dark: #2c2c2c;
      --outline: transparent;
    }
    -webkit-appearance: none;
    `;
  document.body.appendChild(style);
});

describe("Button Component", () => {
  test("should render a button with text 'Test' with default styles properties: padding > 8px, border-radius > 8px 8px, display > flex; align-items > center", (done) => {
    const { getByRole, container } = render(<Button>Test</Button>);
    document.body.appendChild(container);

    const buttonElementByRole = getByRole("button");

    const styles = getComputedStyle(buttonElementByRole);

    expect(buttonElementByRole).toBeInTheDocument();
    expect(buttonElementByRole.textContent).toBe("Test");

    expect(styles.padding).toBe("8px 8px");
    expect(styles.display).toBe("flex");
    expect(styles.alignItems).toBe("center");

    done();
  });

  test("should render a button with text 'Test' with custom styles passed by properties:  padding > 2px, border-radius > 5px", (done) => {
    const { getByRole, container } = render(
      <Button $variant="secondary" $padding={2} $borderRadius="sm">
        Test
      </Button>,
    );
    document.body.appendChild(container);

    const buttonElementByRole = getByRole("button");

    const styles = getComputedStyle(buttonElementByRole);

    expect(buttonElementByRole).toBeInTheDocument();
    expect(buttonElementByRole.textContent).toBe("Test");
    expect(styles.padding).toBe("2px");
    expect(styles.borderRadius).toBe("5px");
    expect(styles.display).toBe("flex");
    expect(styles.alignItems).toBe("center");

    done();
  });

  test("Button without border-radius", (done) => {
    const { getByRole, container } = render(
      <Button $borderRadius="none">Test</Button>,
    );

    const buttonElementByRole = getByRole("button");

    const styles = getComputedStyle(buttonElementByRole);

    expect(buttonElementByRole).toBeInTheDocument();
    expect(styles.borderRadius).toBe("0");
    done();
  });
});
