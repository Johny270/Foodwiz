import { Recipe } from "../models/recipe.js";

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('recipes/index', {
      // profiles,
      title: "Let's make a recipe"
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
}