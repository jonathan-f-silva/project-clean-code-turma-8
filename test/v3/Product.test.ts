import { Product } from "../../src/v3/Product";

describe("Classe Product", () => {
  test("Deve ter descrição, preço e quantidade", () => {
    const product = new Product("Bola", 1.7, 3);
    expect(product.description).toEqual("Bola");
    expect(product.price).toEqual(1.7);
    expect(product.quantity).toEqual(3);
  });

  test("Não deve cadastrar com descrição vazia", () => {
    expect(() => new Product("", 0, 0)).toThrow(
      "Erro: Produto com descrição inválida"
    );
  });

  test("Não deve cadastrar com preço negativo", () => {
    expect(() => new Product("Bola", -1, 0)).toThrow(
      "Erro: Produto com preço inválido"
    );
  });

  test("Não deve cadastrar com quantidade negativa", () => {
    expect(() => new Product("Bola", 1, -10)).toThrow(
      "Erro: Produto com quantidade inválida"
    );
  });
});
