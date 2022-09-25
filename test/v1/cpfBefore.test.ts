import { validate } from "../../src/v1/cpfBefore";

test("Não aceita CPF inválido", () => {
  const isValid = validate("111.111.101-11");
  expect(isValid).toBe(false);
});

test("Não aceita CPF com todos os dígitos iguais", () => {
  const isValid = validate("111.111.111-11");
  expect(isValid).toBe(false);
});

test("Não aceita CPF com todos os dígitos iguais 2", () => {
  const isValid = validate("000.000.000-00");
  expect(isValid).toBe(false);
});

test("Não aceita CPF incompleto", () => {
  const isValid = validate("111111");
  expect(isValid).toBe(false);
});

test("Aceita CPF válido", () => {
  const isValid = validate("111.444.777-35");
  expect(isValid).toBe(true);
});
