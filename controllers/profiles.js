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
  .then
}

export {
  index,
  show
}