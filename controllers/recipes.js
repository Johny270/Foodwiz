import { Recipe } from "../models/recipe.js";

function index(req, res) {
  Recipe.find({})
  .then(recipes => {
    res.render('recipes/index', {
      recipes,
      title: 'Your recipes'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles/index')
  })
}

function newRecipe(req, res) {
  res.render('recipes/new', {
    title: 'Create your New Recipe Here'
  })
}

function create(req, res) {
  Recipe.create(req.body)
  .then(recipe => {
    res.redirect('/profiles')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

export {
  index,
  newRecipe as new,
  create
}