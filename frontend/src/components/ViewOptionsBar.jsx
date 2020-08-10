import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeComponentSizeAC } from '../store/slice'

export default function ViewOptionsBar() {
  const dispatch = useDispatch()
  const { componentsSize, numberOfOffers } = useSelector(state => state.slice.view)

  const changeComponentSize = (e) => {
    dispatch(changeComponentSizeAC(e.target.value))
  }

  return (
    <>
      <form>
        <div className="radio">
          <input
            type="radio"
            id="short"
            value="1"
            checked={componentsSize === 1}
            onChange={changeComponentSize}
          />
        </div>
        <div className="radio">
          <input
            type="radio"
            id="normal"
            value="2"
            checked={componentsSize === 2}
            onChange={changeComponentSize}
          />
        </div>
      </form>
      <span>Найдено {numberOfOffers} заказов:</span>
    </>
  );
}
