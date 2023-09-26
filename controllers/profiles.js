import { Profile } from "../models/profile.js";

function index(req, res) {
  Profile.find({})
  .then(profiles => {
    res.render('profiles/index', {
      profiles,
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