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
    {/* --- свернуть все и развернуть все ПЕРЕНЕС в фильтры FiltreDlock ----*/}
    {/*   <form>
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
      </form> */}
      <span>Найдено {numberOfOffers} заказов:</span>
    </>
  );
}
