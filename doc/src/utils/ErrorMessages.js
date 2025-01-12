export const NICKNAME_ALREADY_EXISTS = {
    statusCode: 400,
    code: 101,
    errorMessage: "Falha ao criar ou atualizar usuário",
    errorDetails: "Nickname já está em uso."
  };

export const NOT_FOUND = {
    statusCode: 404,
    code: 103,
    errorMessage: "Dados não encontrados",
    errorDetails: "Usuário não existe."
  };

export const INTERNAL_ERROR = {
  statusCode: 500,
  code: 100,
  errorMessage: "Operação não realizada",
  errorDetails: "Erro não mapeado. Tente mais tarde."
}