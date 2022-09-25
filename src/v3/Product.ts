export class Product {
  constructor(
    readonly description: string,
    readonly price: number,
    readonly quantity: number
  ) {
    if (!this.isValidDescription())
      throw new Error("Erro: Produto com descrição inválida");
    if (!this.isValidPrice())
      throw new Error("Erro: Produto com preço inválido");
    if (!this.isValidQuantity())
      throw new Error("Erro: Produto com quantidade inválida");
  }

  private isValidDescription() {
    return this.description !== "";
  }

  private isValidPrice() {
    return this.price >= 0;
  }

  private isValidQuantity() {
    return this.quantity >= 0;
  }
}
