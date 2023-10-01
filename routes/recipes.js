import { Router } from "express";
import { isLoggedIn } from "../middleware/middleware.js";
import * as recipesCtrl from '../controllers/recipes.js'

const router = Router()

router.get('/', isLoggedIn, recipesCtrl.index)
router.get('/new', isLoggedIn, recipesCtrl.new)
router.post('/', isLoggedIn, recipesCtrl.create)
router.get('/:recipeId', isLoggedIn, recipesCtrl.show)
router.get('/:recipeId/edit', isLoggedIn, recipesCtrl.edit)
router.put('/:recipeId', isLoggedIn, recipesCtrl.update)
router.delete('/:recipeId', isLoggedIn, recipesCtrl.delete)
router.post('/:recipeId/comments', isLoggedIn, recipesCtrl.createComment)



export {
  router
}