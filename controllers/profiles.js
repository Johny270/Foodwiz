import { Profile } from "../models/profile.js";

function index(req, res) {
  Profile.find({})
  .populate('recipes')
  .then(profiles => {
    res.render('profiles/index', {
      profiles: profiles,
      title: 'Your Profile'
    })
  })
  .catch(err => {
    console.log(err)
    res.redirect('/')
  })
}

function show(req, res) {
  Profile.findById(req.params.profileId)
  .populate('recipes')
  .then(profile => {
    // const isself = profile._id.equals(req.user.profile._id)
    res.render('profiles/show', {
      title: `${profile.name}'s profile`,
      recipes: recipes,
      profile,

    })
  })
}

export {
  index,
  show
}