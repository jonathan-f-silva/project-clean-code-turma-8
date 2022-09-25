const FIRST_DV_INDEX = 9;
const CPF_DIGITS_QUANTITY = 11;

function calculateDvDigit(baseDigits: number[]) {
  let multiplier = 2;
  const sumTotal = baseDigits.reverse().reduce((sum, currentDigit) => {
    const result = currentDigit * multiplier;
    multiplier += 1;
    return sum + result;
  }, 0);
  const divisionResult = Math.floor(sumTotal % CPF_DIGITS_QUANTITY);
  return divisionResult < 2 ? 0 : CPF_DIGITS_QUANTITY - divisionResult;
}

function getCpfDigits(cpf: string) {
  const cpfDigits = cpf.match(/\d/g);
  if (!cpfDigits || cpfDigits.length !== 11) return false;
  if (cpfDigits.every((digit) => digit === cpfDigits[0])) return false;
  return cpfDigits.map((digit) => Number(digit));
}

export function isValidCpf(cpf: string) {
  const cpfDigits = getCpfDigits(cpf);
  if (!cpfDigits) return false;
  const baseDigits = cpfDigits.slice(0, FIRST_DV_INDEX);
  const dvDigit1 = cpfDigits[FIRST_DV_INDEX];
  const dvDigit2 = cpfDigits[FIRST_DV_INDEX + 1];
  if (calculateDvDigit([...baseDigits]) === dvDigit1) {
    if (calculateDvDigit([...baseDigits, dvDigit1]) === dvDigit2) {
      return true;
    }
  }
  return false;
}
