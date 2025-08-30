import { suma, resta, multiplicacion, division } from "@/libs/maths";

describe("Maths", () => {
  it("Deberia sumar 2 + 3 y dar 5", () => {
    expect(suma(2, 3)).toBe(5);
  });

  it("Deberia restar 5 - 3 y dar 2", () => {
    expect(resta(5, 3)).toBe(2);
  });

  it("Deberia multiplicar 2 * 3 y dar 6", () => {
    expect(multiplicacion(2, 3)).toBe(6);
  });

  it("Deberia dividir 6 / 3 y dar 2", () => {
    expect(division(6, 3)).toBe(2);
  });
});
