import { isValidObjectId } from 'mongoose';
import createHttpError, { HttpError } from 'http-errors';

export const isValidId = (req, res, next) => {
  const { id } = req.params;
  if (isValidObjectId(id) === false) {
    next(createHttpError(400, 'ID is not valid'));
  }
  next();
};
