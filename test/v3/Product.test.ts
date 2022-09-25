import { Product } from "../../src/v3/Product";

describe("Classe Product", () => {
  test("Deve ter descrição, preço e quantidade)", () => {
    const product = new Product("Bola", 1.7, 3);

    expect(product.description).toEqual("Bola");
    expect(product.price).toEqual(1.7);
    expect(product.quantity).toEqual(3);
  });
});
