import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { BuildingController } from './building.controller';
import { BuildingValidations } from './building.validations';

const router = express.Router();

router.get('/', BuildingController.getAllFromDB);
router.get('/:id', BuildingController.getByIdFromDB);

router.post(
  '/',
  //   auth(ENUM_USER_ROLE.SUPER_ADMIN, ENUM_USER_ROLE.ADMIN),
  validateRequest(BuildingValidations.create),
  BuildingController.insertIntoDB
);

router.patch(
  '/:id',
  validateRequest(BuildingValidations.update),
  BuildingController.updateOneInDB
);

router.delete('/:id', BuildingController.deleteByIdFromDB);

export const buildingRoutes = router;
