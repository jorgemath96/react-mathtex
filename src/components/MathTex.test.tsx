import { render, screen } from "@testing-library/react";
import MathTex from "..";

describe("MathTex", () => {
  beforeEach(() => {
    const math =
      "Dada una función <$>f: A \\longrightarrow \\mathbb{R}</$>, decimos que el límite de <$>f</$> en el punto <$>x_0 \\in \\mathbb{R}</$> existe y es igual a <$>L</$> si se cumple que: \n <$>\\forall \\epsilon >0: \\exist \\delta >0: \\hspace{0.2cm} 0 < |x-x_0| < \\delta \\hspace{0.2cm} \\textrm{  y  } x \\in A \\hspace{0.2cm} \\Longrightarrow |f(x)-L| < \\epsilon</$$> \n En caso de que dicho límite exista, lo escribimos como: <$>\\displaystyle{\\lim_{x \\rightarrow x_0}} f(x) = L</$>.";
    render(<MathTex>{math}</MathTex>);
  });
  test("should show text in LaTex format", () => {
    expect(screen.queryByText(/exista/i)).toBeDefined();
  });

  test("add two numbers", () => {
    expect(screen.queryByText(/span/i)).toBeDefined();
  });
});
