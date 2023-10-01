import { Profile } from "../models/profile.js"
import { Recipe } from "../models/recipe.js"

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
      title: 'ALL PROFILES',
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res) {
  Profile.findById(req.params.profileId)
  .then(profile => {
    res.render('profiles/show', {
      title: `${profile.name}'s profile`,
      profile,
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

export {
  index,
  show
}