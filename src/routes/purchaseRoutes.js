import { Router } from "express";
import * as PurchaseController from "../controllers/purchaseController";

const route = Router();
route
  .route("/")
  .post(PurchaseController.createController)
  .get(PurchaseController.getAllController);

route
  .route("/:id")
  .patch(PurchaseController.updateOneController)
  .get(PurchaseController.getOneController)
  .delete(PurchaseController.deleteOneController);

export default route;