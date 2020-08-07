import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilterBudgetAC } from '../store/slice'

export default function FilterBlock() {

  const dispatch = useDispatch()
  const filterBudget = useSelector(state => state.slice.view.filterBudget)

  // const [filterBudget, setFilterBudget] = useState(false)

  // const budgetFilterHandler = (e) => {
  //   toggleBudgetFilterAC()
  // }

  // const handleInputChange = (event) => {
  //   const target = event.target;
  //   const value = target.name === 'isGoing' ? target.checked : target.value;
  //   const name = target.name;
  // }


  return (
    <form>
      <label>
        С бюджетом:
          <input
          name="filterBudget"
          type="checkbox"
          checked={filterBudget}
          onChange={() => dispatch(toggleFilterBudgetAC())} />
      </label>
      <br />
    </form>
  );
}

