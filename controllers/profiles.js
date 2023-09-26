import { Profile } from "../models/profile.js";
import { Recipe } from "../models/recipe.js";

function index(req, res) {
  Profile.find({})
  // .populate('recipes')
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
      title: 'Your Profile',
    })
  })
  // Recipe.find({})
  // .then(recipes => {
  //   res.render('profiles/index', {
  //     recipes,
  //   })
  // })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res) {
  Profile.findById(req.params.profileId)
  .then(profile => {
    // const isself = profile._id.equals(req.user.profile._id)
    res.render('profiles/show', {
      title: `${profile.name}'s profile`,
      profile,

    })
  })
}

export {
  index,
  show
}