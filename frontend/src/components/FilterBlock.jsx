import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilterBudgetAC, toggleFilterFavouritesAC } from '../store/slice'
import { changeComponentSizeAC } from '../store/slice'

export default function FilterBlock() {

  const dispatch = useDispatch()
  const { filterBudget, filterFavourites } = useSelector(state => state.slice.view)
  const isAuth = useSelector(state => state.slice.user.isAuth)

  const { componentsSize, numberOfOffers } = useSelector(state => state.slice.view)
  const changeComponentSize = (e) => {
    dispatch(changeComponentSizeAC(e.target.value))
  }

  return (
    <>
      {isAuth &&
      
        <form className="filterItem" >
          <input 
            name="filterFavourites"
            type="checkbox"
            checked={filterFavourites}
            onChange={() => dispatch(toggleFilterFavouritesAC())} />
          <label>
            Избранные:
        </label>
          <br />
        </form>
      }

      <form className="filterItem">
        <input
          name="filterBudget"
          type="checkbox"
          checked={filterBudget}
          onChange={() => dispatch(toggleFilterBudgetAC())} />
        <label>
          С бюджетом:
        </label>

        <br />
      </form>

      <form className="filterItem">
        <div className="radio_sver">
          <input
            type="radio"
            id="short"
            value="1"
            checked={componentsSize === 1}
            onChange={changeComponentSize}
          /> Свернуть все 
        </div>
        <div className="radio_razv">
          <input
            type="radio"
            id="normal"
            value="2"
            checked={componentsSize === 2}
            onChange={changeComponentSize}
          /> Развернуть все
        </div>
      </form>
    </>
  );
}

