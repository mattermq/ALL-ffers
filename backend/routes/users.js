const express = require('express')
const User = require('../models/user')
const router = express.Router()

router.patch('/', async (req, res) => {
  const { userId, offerId } = req.body
  console.log(userId, offerId)
  const user = await User.findOne({ _id: userId });
  if (user.favourites.includes(offerId))
    user.favourites = user.favourites.filter(offer => offer._id !== offerId)
  else user.favourites.push(offerId)
  user.save()
  res.json(user)
})

module.exports = router
