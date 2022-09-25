export class CPF {
  private FIRST_DV_INDEX = 9;
  private CPF_DIGITS_QUANTITY = 11;
  private CPF_FORMAT = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;

  constructor(readonly cpf: string) {
    if (!this.isValidCpf()) {
      throw new Error("Erro: CPF inválido");
    }
  }

  private calculateDvDigit(baseDigits: number[]) {
    let multiplier = 2;
    const sumTotal = baseDigits.reverse().reduce((sum, currentDigit) => {
      const result = currentDigit * multiplier;
      multiplier += 1;
      return sum + result;
    }, 0);
    const divisionResult = Math.floor(sumTotal % this.CPF_DIGITS_QUANTITY);
    return divisionResult < 2 ? 0 : this.CPF_DIGITS_QUANTITY - divisionResult;
  }

  private getCpfDigits() {
    const cpfDigits = this.cpf.match(/\d/g);
    if (!cpfDigits || cpfDigits.length !== 11) return false;
    if (cpfDigits.every((digit) => digit === cpfDigits[0])) return false;
    return cpfDigits.map((digit) => Number(digit));
  }

  private isValidCpfFormat() {
    return this.cpf.match(this.CPF_FORMAT);
  }

  private isValidCpf() {
    if (!this.isValidCpfFormat()) return false;
    const cpfDigits = this.getCpfDigits();
    if (!cpfDigits) return false;
    const baseDigits = cpfDigits.slice(0, this.FIRST_DV_INDEX);
    const dvDigit1 = cpfDigits[this.FIRST_DV_INDEX];
    const dvDigit2 = cpfDigits[this.FIRST_DV_INDEX + 1];
    if (this.calculateDvDigit([...baseDigits]) === dvDigit1) {
      if (this.calculateDvDigit([...baseDigits, dvDigit1]) === dvDigit2) {
        return true;
      }
    }
    return false;
  }

  public toString() {
    return this.cpf;
  }
}
