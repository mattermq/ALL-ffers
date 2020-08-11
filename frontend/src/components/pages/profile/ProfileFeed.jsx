import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardShort from '../../CardShort';
import CardNormalP from '../../CardNormalP';
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
      <div className="wrap_profile">
        <div className="prof_blockCards">
          <div className="blockCards_tabs">
            <div className="tab">В избранном</div>
            <div className="tab">В работе</div>
            <div className="tab">Сделано</div>
          </div>
          <div className="blockCards_cards">
        {
          paginatedOffers.length > 0 && paginatedOffers.map(offer => {
            if (offer.hasExpandedSize === true)
              return <CardExtended key={offer._id} offer={offer} />
            else if (componentsSize === 1)
              return <CardShort key={offer._id} offer={offer} />
            else
              return <CardNormalP key={offer._id} offer={offer} />
          })
        }
        <Pagination totalPosts={offers.length} />
        </div>
        </div>
        <div className="prof_blockStat">
          <div className="blockStat_graf">Статистика</div> 
        </div>
      </div>       
      </>
    )
  else return null
}
