import { CPF } from "../../src/v3/CPF";

describe("Classe CPF", () => {
  test("Não aceita CPF inválido", () => {
    expect(() => new CPF("111.111.101-11")).toThrow("Erro: CPF inválido");
  });

  test("Não aceita CPF com todos os dígitos iguais", () => {
    expect(() => new CPF("111.111.111-11")).toThrow("Erro: CPF inválido");
  });

  test("Não aceita CPF com todos os dígitos iguais 2", () => {
    expect(() => new CPF("000.000.000-00")).toThrow("Erro: CPF inválido");
  });

  test("Não aceita CPF incompleto", () => {
    expect(() => new CPF("111111")).toThrow("Erro: CPF inválido");
  });

  test("Não aceita CPF com formato inválido", () => {
    expect(() => new CPF("11144477735")).toThrow("Erro: CPF inválido");
  });

  test("Aceita CPF válido", () => {
    expect(() => new CPF("000.009.000-01")).not.toThrow("Erro: CPF inválido");
    expect(() => new CPF("111.444.777-35")).not.toThrow("Erro: CPF inválido");
  });

  test("Retorna o CPF caso seja convertido em string", () => {
    const cpf = new CPF("111.444.777-35");
    expect(cpf.toString()).toEqual("111.444.777-35");
    expect(String(cpf)).toEqual("111.444.777-35");
  });
});
