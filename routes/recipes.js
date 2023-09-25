import { Router } from "express";
import { isLoggedIn } from "../middleware/middleware.js";
import * as recipesCtrl from '../controllers/recipes.js'

const router = Router()

router.get('/', isLoggedIn, recipesCtrl.index)

export {
  router
}