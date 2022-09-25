import { CPF } from "../../src/v3/CPF";
import { Order } from "../../src/v3/Order";
import { Product } from "../../src/v3/Product";

describe("Classe Order", () => {
  const product1 = new Product("Bola", 3.33, 4);
  const product2 = new Product("Pião", 2.27, 5);
  const product3 = new Product("Pipa", 1.11, 10);
  const cpf = new CPF("111.444.777-35");
  const discount = 50;

  test("Deve criar um pedido", () => {
    const order = new Order(cpf, [product1, product2, product3]);
    expect(order.totalPrice).toEqual(35.77);
  });

  test("Deve criar um pedido com cupom de desconto (percentual sobre o total do pedido)", () => {
    const order = new Order(cpf, [product1, product2, product3], discount);
    expect(order.totalPrice).toEqual(17.88);
  });

  test("Não deve criar um pedido vazio", () => {
    expect(() => new Order(cpf, [])).toThrow("Erro: Pedido sem produtos");
  });
});
