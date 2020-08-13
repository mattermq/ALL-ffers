import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

export default function ProfileStats() {

  const { startedProjects, finishedProjects, favourites, firstName } = useSelector(state => state.slice.user)
  const offers = useSelector(state => state.slice.offers)

  const favouritesAsObjects = []
  favourites.forEach(fav => {
    const favOffer = offers.find(offer => offer._id == fav)
    favouritesAsObjects.push(favOffer)
  })

  function startOfMonth(date) {
    return new Date(date.getFullYear(), date.getMonth(), 1);
  }

  const dateNow = new Date()
  const thisMonth = dateNow.getUTCMonth() + 1; //months from 1-12
  const thisDay = dateNow.getUTCDate();
  const thisYear = dateNow.getUTCFullYear();

  const startThisMonth = startOfMonth(dateNow)
  // const startMonthM1 = startOfMonth(thisYear, thisMonth - 1, 1)
  // const startMonthM2 = startOfMonth(thisYear, thisMonth - 2, 1)
  // const startMonthM3 = startOfMonth(thisYear, thisMonth - 3, 1)



  // console.log(yearNow, monthNow, dayNow)

  // const dt = new Date();
  // console.log(startOfMonth(dt).toString());

  return (
    <>
      <p>{thisYear}, {thisMonth}, {thisDay}, {startThisMonth.toString()}</p>
      {/* <p>{startMonthM1.toString()}</p>
      <p>{startMonthM2.toString()}</p>
      <p>{startMonthM3.toString()}</p> */}

      <table></table>
    </>
  )
}
