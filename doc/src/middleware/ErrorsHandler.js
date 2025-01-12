import { INTERNAL_ERROR, NICKNAME_ALREADY_EXISTS, NOT_FOUND} from "../utils/ErrorMessages.js";

export const validateParams = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.params, { abortEarly: false });
    if (error) {
      return res.status(400).json({
        code: 102,
        message: 'Erro de validação',
        details: error.details.map((detail) => detail.message)[0],
      });
    }
    next();
};

export const validateBody = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({
        code: 102,
        message: 'Erro de validação',
        details: error.details.map((detail) => detail.message)[0],
      });
    }
    next();
};

export function validateErrorMessage(errorMessage) {
    const error =  (message) => {
      switch (message) {
        case "duplicar valor da chave viola a restrição de unicidade \"client_nickname_key\"":
          return NICKNAME_ALREADY_EXISTS

        case "No data returned from the query.":
          return NOT_FOUND

        default: 
          return INTERNAL_ERROR
      }
    }
    const errorInfo = error(errorMessage);
    return {
      statusCode: errorInfo.statusCode,
      code: errorInfo.code,
      errorMessage: errorInfo.errorMessage,
      errorDetails: errorInfo.errorDetails
    }
}