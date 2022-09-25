import { CPF } from "./CPF";
import { Product } from "./Product";

export class Order {
  constructor(
    readonly cpf: CPF,
    readonly products: Product[],
    readonly discount = 0
  ) {}

  get totalPrice() {
    const subTotal = this.products.reduce(
      (total, { price, quantity }) => total + price * quantity,
      0
    );
    const discountDifference = this.discount / 100;
    return Math.floor(subTotal * (1 - discountDifference) * 100) / 100;
  }
}
