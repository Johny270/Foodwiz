import { Profile } from "../models/profile.js";

function index(req, res) {
  Profile.find({})
  .then(profile => {
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

export {
  index,
}