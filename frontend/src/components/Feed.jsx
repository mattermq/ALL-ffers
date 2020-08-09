import React from 'react';
import CardFull from './CardFull';
import CardShort from './CardShort';
import { useSelector } from 'react-redux';

function Feed() {
  const offersAll = useSelector((state) => state.slice.offers)
  const offers = offersAll.slice(0, 30)
  if (offers)
    return (
      <>
        {offers.length > 0 && offers.map(offer => <CardFull key={offer._id} offer={offer} />)}
       {/*  {offers.length > 0 && offers.map(offer => <CardShort key={offer._id} offer={offer} />)} */}
      </>
    )
  else return null
}

export default Feed;
