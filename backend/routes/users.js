const express = require('express')
const User = require('../models/user')
const Project = require('../models/project')
const router = express.Router()

router.patch('/favourite', async (req, res) => {
  const { userId, offerId } = req.body
  // console.log(userId, offerId)
  const user = await User.findOne({ _id: userId });
  if (user.favourites.includes(offerId)) {
    user.favourites = user.favourites.filter(offer => offer != offerId)
  }
  else user.favourites.push(offerId)
  user.save()
  res.json(user)
})

router.post('/start', async (req, res) => {
  const { _id, title, description, tags, hasProjectBudget, hasHourlyRate, budget, publishedAt, publishedAtTS, url, from, user, startedAt, comment } = req.body
  const newProject = new Project({ offerId: _id, title, description, tags, hasProjectBudget, hasHourlyRate, budget, publishedAt, publishedAtTS, url, from, user, startedAt, startedAtTS: Date.parse(startedAt), comment })
  newProject.save()
  const currentUser = await User.findOne({ _id: user })
  currentUser.startedProjects.push(newProject)
  currentUser.favourites = currentUser.favourites.filter(offer => offer != _id)
  currentUser.save()
  // console.log(currentUser)
  res.json(newProject)
})


router.post('/finish', async (req, res) => {
  const { _id, user, comment, finishedAt } = req.body
  const finishedProject = await Project.findOne({ _id })
  // const newProject = new Project({ offerId: _id, title, description, tags, hasProjectBudget, hasHourlyRate, budget, publishedAt, publishedAtTS, url, from, user, startedAt, comment })
  finishedProject.comment = comment
  finishedProject.finishedAt = finishedAt
  finishedProject.finishedAtTS = Date.parse(finishedAt)

  finishedProject.save()
  console.log(finishedProject)
  const currentUser = await User.findOne({ _id: user })
  currentUser.finishedProjects.push(finishedProject)
  currentUser.startedProjects = currentUser.startedProjects.filter(offer => offer._id != _id)
  currentUser.save()
  res.json(finishedProject)
})



module.exports = router
