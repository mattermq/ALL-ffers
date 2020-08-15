import React from 'react'
import { useSelector } from 'react-redux'
import BarsChart from '../../BarsChart';
import LineChart from '../../LineChart';

export default function ProfileStats() {

  const { startedProjects, finishedProjects, favourites } = useSelector(state => state.slice.user)
  const offers = useSelector(state => state.slice.offers)

  const favouritesAsObjects = []
  favourites.forEach(fav => {
    const favOffer = offers.find(offer => offer._id == fav)
    favouritesAsObjects.push(favOffer)
  })

  const months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']

  const dateNow = new Date()
  const thisMonth = dateNow.getUTCMonth(); //months from 1-12
  const thisDay = dateNow.getUTCDate();
  const thisYear = dateNow.getUTCFullYear();

  const statsThisMonth = {
    name: months[thisMonth],
    start: Date.parse(new Date(thisYear, thisMonth, 1)),
    year: thisYear,
    startedProjects: [],
    finishedProjects: [],
    earned: 0
  }

  const statsMonthM1 = {
    name: months[thisMonth - 1],
    start: Date.parse(new Date(thisYear, thisMonth - 1, 1)),
    year: thisYear,
    startedProjects: [],
    finishedProjects: [],
    earned: 0
  }

  const statsMonthM2 = {
    name: months[thisMonth - 2],
    start: Date.parse(new Date(thisYear, thisMonth - 2, 1)),
    year: thisYear,
    startedProjects: [],
    finishedProjects: [],
    earned: 0
  }

  finishedProjects.forEach(project => {
    if (project.finishedAtTS >= statsThisMonth.start) {
      statsThisMonth.finishedProjects.push(project)
      return
    } else if (project.finishedAtTS >= statsMonthM1.start && project.finishedAtTS < statsThisMonth.start) {
      statsMonthM1.finishedProjects.push(project)
      return
    } else if (project.finishedAtTS >= statsMonthM2.start && project.finishedAtTS < statsMonthM1.start) {
      statsMonthM2.finishedProjects.push(project)
      return
    }
  })


  startedProjects.forEach(project => {
    if (project.startedAtTS >= statsThisMonth.start) {
      statsThisMonth.startedProjects.push(project)
      return
    } else if (project.startedAtTS >= statsMonthM1.start && project.startedAtTS < statsThisMonth.start) {
      statsMonthM1.startedProjects.push(project)
      return
    } else if (project.startedAtTS >= statsMonthM2.start && project.startedAtTS < statsMonthM1.start) {
      statsMonthM2.startedProjects.push(project)
      return
    }
  })

  statsThisMonth.earned = statsThisMonth.finishedProjects.reduce((sum, item) => sum + Number(item.budget), 0)
  statsMonthM1.earned = statsMonthM1.finishedProjects.reduce((sum, item) => sum + Number(item.budget), 0)
  statsMonthM2.earned = statsMonthM2.finishedProjects.reduce((sum, item) => sum + Number(item.budget), 0)

  // console.log(yearNow, monthNow, dayNow)
  // const dt = new Date();
  // console.log(startOfMonth(dt).toString());

  return (
    <>
      <BarsChart
        startedByMonths={[statsMonthM2.startedProjects.length, statsMonthM1.startedProjects.length, statsThisMonth.startedProjects.length]}
        finishedByMonths={[statsMonthM2.finishedProjects.length, statsMonthM1.finishedProjects.length, statsThisMonth.finishedProjects.length]}
        months={[months[thisMonth - 2], months[thisMonth - 1], months[thisMonth]]}
      />
      <LineChart
        earnedByMonths={[statsMonthM2.earned, statsMonthM1.earned, statsThisMonth.earned]}
        months={[months[thisMonth - 2], months[thisMonth - 1], months[thisMonth]]}
      />
    </>
  )
}
