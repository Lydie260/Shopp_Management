import ProductModel from "../models/product";
import {
  create,
  getAll,
  getOneById,
  updateOneById,
  deleteOneById,
} from "./globalControllers";

export const createController = create(ProductModel);
export const getAllController = getAll(ProductModel);
export const getOneController = getOneById(ProductModel);
export const updateOneController = updateOneById(ProductModel);
export const deleteOneController = deleteOneById(ProductModel);