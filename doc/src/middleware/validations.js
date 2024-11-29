export const validateParams = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.params, { abortEarly: false });
    if (error) {
      return res.status(400).json({
        status: 'Error',
        message: 'Erro de validação',
        details: error.details.map((detail) => detail.message),
      });
    }
    next();
};

export const validateBody = (schema) => (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({
        status: 'Error',
        message: 'Erro de validação',
        details: error.details.map((detail) => detail.message),
      });
    }
    next();
};