import { getUserByNickname, users } from '../models/usersModel.js'

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

export const isUnique = () => async (req, res, next) =>{
  try {
    const result = await getUserByNickname(req.body.nickname);
    if (result) {
      return res.status(400).json({
        status: 'Erro',
        message: 'Erro de validação',
        details: 'Nickname já em uso.',
      });
    }
  } catch (error) {
    res.status(500).json({
      status: error.message
    });
  }
  next();
}

export const existsNickname = () => async (req, res, next) =>{
  try {
    const result = await getUserByNickname(req.body.nickname);
    if (!result) {
      return res.status(404).json({
        status: 'Erro',
        message: 'Não é possível atualizar dados',
        details: 'Nickname não encontrado',
      });
    }
  } catch (error) {
    res.status(500).json({
      status: error.message
    });
  }
  next();
}