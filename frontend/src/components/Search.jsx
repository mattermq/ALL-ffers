import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function Search() {

  const searchFilterValue = useSelector(state => state.slice.view.searchFilterValue)

  const dispatch = useDispatch()
  return (
    <input type="text" />
  )

}
