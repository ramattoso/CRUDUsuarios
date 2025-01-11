import Joi from "joi";

export const userSchema = Joi.object({
    name: Joi.string().min(4).max(255).required().messages({
      "any.required": "O campo 'name' é obrigatório.",
      "string.empty": "O campo 'name' não pode estar vazio.",
      "string.min": "O campo 'name' precisa ter mais do que 4 caracteres.",
      "string.max": "O campo 'name' precisa ter menos do que 255 caracteres."
    }),
    nickname: Joi.string().min(4).max(64).required().messages({
      "any.required": "O campo 'nickname' é obrigatório.",
      "string.empty": "O campo 'nickname' não pode estar vazio.",
      "string.min": "O campo 'nickname' precisa ter mais do que 4 caracteres.",
      "string.max": "O campo 'nickname' precisa ter menos do que 64 caracteres."
    }),
    password: Joi.string().min(6).max(18).required().messages({
      "any.required": "O campo 'password' é obrigatório.",
      "string.empty": "O campo 'password' não pode estar vazio",
      "string.min": "O campo 'password' precisa ter no mínimo 6 caracteres",
      "string.max": "O campo 'password' precisa ter no máximo 18 caracteres"
    })
  });

export const uuidSchema = Joi.object({
    id: Joi.string().guid({version: ['uuidv4', 'uuidv5']}).messages({
        "string.guid": "O 'id' deve ser um UUID válido.",
    })
});