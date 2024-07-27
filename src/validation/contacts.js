import Joi from 'joi';

export const createContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Contactname should be a string',
    'string.min': 'Contactname should have at least{#limit} characters',
    'string.max': 'Contactname should have at most {#limit} characters',
    'any.required': 'Contactname is required',
  }),
  phoneNumber: Joi.string().min(3).max(20).required().messages({
    'string.base': 'Phonenumber should be a string',
    'string.min': 'Phonenumber should have at least{#limit} characters',
    'string.max': 'Phonenumber should have at most {#limit} characters',
    'any.required': 'Phonenumber is required',
  }),
  email: Joi.string().email().messages({
    'string.base': 'Email should be in a a string',
    'string.email': 'Email should be in a valid email format',
  }),
  isFavourite: Joi.boolean().default(false),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .required()
    .default('personal')
    .messages({
      'string.valid':
        'Contactype should be one of these: work, home or personal',
      'any.required': 'Contactype is required',
    }),
});

export const updateContactSchema = Joi.object({
  name: Joi.string().min(3).max(20).messages({
    'string.base': 'Contactname should be a string',
    'string.min': 'Contactname should have at least{#limit} characters',
    'string.max': 'Contactname should have at most {#limit} characters',
    'any.required': 'Contactname is required',
  }),
  phoneNumber: Joi.string().min(3).max(20).messages({
    'string.base': 'Phonenumber should be a string',
    'string.min': 'Phonenumber should have at least{#limit} characters',
    'string.max': 'Phonenumber should have at most {#limit} characters',
    'any.required': 'Phonenumber is required',
  }),
  email: Joi.string().email().messages({
    'string.base': 'Email should be in a a string',
    'string.email': 'Email should be in a valid email format',
  }),
  isFavourite: Joi.boolean().default(false),
  contactType: Joi.string()
    .valid('work', 'home', 'personal')
    .default('personal')
    .messages({
      'string.valid':
        'Contactype should be one of these: work, home or personal',
      'any.required': 'Contactype is required',
    }),
});
