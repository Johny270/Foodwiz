import { Recipe } from "../models/recipe.js";

function index(req, res) {
  Recipe.find({})
  .then(recipes => {
    res.render('recipes/index', {
      recipes,
      title: 'All recipes'
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
  req.body.author = req.user.profile._id
  Recipe.create(req.body)
  .then(recipe => {
    console.log(profile.recipes)
    res.redirect('/profiles')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/profiles')
  })
}

function show(req, res) {
  Recipe.findById(req.params.recipeId)
  .populate('author')
  .then(recipe => {
    res.render('recipes/show', {
      recipe,
      title: `${recipe.title}`
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/recipes')
  })
}

function edit(req, res) {
  Recipe.findById(req.params.recipeId)
  .then(recipe => {
    res.render('recipes/edit', {
      recipe,
      title: `Edit ${recipe.title}`
    })
  })
}

export {
  index,
  newRecipe as new,
  create,
  show,
  edit
}