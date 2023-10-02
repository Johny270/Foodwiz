import { Profile } from "../models/profile.js"

function show(req, res) {
  Profile.findById(req.params.profileId)
  .populate('recipes')
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
  show
}