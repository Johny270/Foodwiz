import { Router } from "express";
import { isLoggedIn } from "../middleware/middleware.js";
import * as recipesCtrl from '../controllers/recipes.js'

const router = Router()

router.get('/', isLoggedIn, recipesCtrl.index)
router.get('/new', recipesCtrl.new)
router.post('/', recipesCtrl.create)
router.get('/:recipeId', recipesCtrl.show)
router.get('/:recipeId/edit', recipesCtrl.edit)
router.put('/:recipeId', recipesCtrl.update)
router.delete('/:recipeId', recipesCtrl.delete)
router.post('/:recipeId/comments', recipesCtrl.createComment)



export {
  router
}