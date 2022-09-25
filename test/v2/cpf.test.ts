import { isValidCpf } from "../../src/v2/cpf";

test("Não aceita CPF inválido", () => {
  const isValid = isValidCpf("111.111.101-11");
  expect(isValid).toBe(false);
});

test("Não aceita CPF com todos os dígitos iguais", () => {
  const isValid = isValidCpf("111.111.111-11");
  expect(isValid).toBe(false);
});

test("Não aceita CPF com todos os dígitos iguais 2", () => {
  const isValid = isValidCpf("000.000.000-00");
  expect(isValid).toBe(false);
});

test("Não aceita CPF incompleto", () => {
  const isValid = isValidCpf("111111");
  expect(isValid).toBe(false);
});

test("Aceita CPF válido", () => {
  const isValid = isValidCpf("111.444.777-35");
  expect(isValid).toBe(true);
});
