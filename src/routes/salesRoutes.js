

import { Router } from "express";
import * as SalesController from "../controllers/salesController";

const route = Router();
route
  .route("/")
  .post(SalesController.createController)
  .get(SalesController.getAllController);

route
  .route("/:id")
  .patch(SalesController.updateOneController)
  .get(SalesController.getOneController)
  .delete(SalesController.deleteOneController);

export default route;