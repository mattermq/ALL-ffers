import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardShort from '../../CardShort';
import CardNormal from '../../CardNormal';
import CardExtended from '../../CardExtended';
import Pagination from '../../Pagination'
import { setNumberOfOffersAC } from '../../../store/slice'

export default function ProfileFeed() {
  const dispatch = useDispatch()
  const {
    componentsSize,
    filterSearch,
    profileCurrentPage,
    profilePostsPerPage,
  } = useSelector(state => state.slice.view)
  const offersAll = useSelector((state) => state.slice.offers)
  let offers = offersAll.filter(offer => offer.isFavourite === true)

  // filtering by search
  offers = offers.filter(offer =>
    offer.title.toLowerCase().includes(filterSearch.toLowerCase()) || offer.description.toLowerCase().includes(filterSearch.toLowerCase()))

  // slice by pagination
  const indexOfLastOffer = profileCurrentPage * profilePostsPerPage
  const indexOfFirstOffer = indexOfLastOffer - profilePostsPerPage
  const paginatedOffers = offers.slice(indexOfFirstOffer, indexOfLastOffer)

  dispatch(setNumberOfOffersAC(offers.length))

  if (paginatedOffers)
    return (
      <>
        {
          paginatedOffers.length > 0 && paginatedOffers.map(offer => {
            if (offer.hasExpandedSize === true)
              return <CardExtended key={offer._id} offer={offer} />
            else if (componentsSize === 1)
              return <CardShort key={offer._id} offer={offer} />
            else
              return <CardNormal key={offer._id} offer={offer} />
          })
        }

        <Pagination totalPosts={offers.length} />
      </>
    )
  else return null
}
