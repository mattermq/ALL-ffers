import React from 'react';
import CardFull from './CardFull';
import CardShort from './CardShort';
import { useSelector } from 'react-redux';

function Feed() {
  const filterBudget = useSelector(state => state.slice.view.filterBudget)
  const sortOption = useSelector(state => state.slice.view.sortOption)

  const offersAll = useSelector((state) => state.slice.offers)
  let offers = offersAll.slice()

  if (filterBudget)
    offers = offers.filter(offer => (offer.hasProjectBudget) || (offer.hasHourlyRate))

  if (sortOption === 'hasProjectBudget') {
    offers = offers
      .filter(offer => offer.hasProjectBudget === true)
      .sort((a, b) => Number(b.budget) - Number(a.budget))
  } else if (sortOption === 'hasHourlyRate') {
    offers = offers
      .filter(offer => offer.hasHourlyRate === true)
      .sort((a, b) => Number(b.budget) - Number(a.budget))
  } else if (sortOption === 'publishedAtTS') {
    offers = offers
      .sort((a, b) => b.publishedAtTS - a.publishedAtTS)
  }

  offers = offers.slice(0, 30)

  if (offers)
    return (
      <>
        {offers.length > 0 && offers.map(offer => <CardFull key={offer._id} offer={offer} />)}
      </>
    )
  else return null
}

export default Feed;
