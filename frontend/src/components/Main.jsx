import React from 'react';
import Feed from './Feed';
import ViewOptionsBar from './ViewOptionsBar';
import SortBlock from './SortBlock';
import SearchBlock from './SearchBlock';
import FilterBlock from './FilterBlock';
import TagsBlock from './TagsBlock';

function Main() {

  return (
    <>
      <div className="mainText"> Удаленная работа на фрилансе </div>
      <div className="mainTextSmall"> Все самые актуальные заказы </div>
      <ViewOptionsBar />
      <div className="wrap_cardBlock_and_filterBlock">
        <div className="main_cardBlock"> <Feed /> </div>
        <div className="main_filterBlock_Search">
          <div className="blockIN_main_filterBlock_Search">
            <div className="search"> <SearchBlock /> </div>
          </div>
        </div>
        <div className="main_filterBlock_Tags">
          <div className="blockIN_main_filterBlock_Tags">
            {/* <div className="filterTags"> Поле с тегами</div> */}
            <TagsBlock className="filterTags" />
          </div>
        </div>
        <div className="main_filterBlock">
          <div><SortBlock /></div>

          <div className="blockIN_main_filterBlock">
            <div className="filter"><FilterBlock /></div>
            <div className="filter"> фильтр </div>
            <div className="filter"> фильтр </div>
            <div className="filter"> фильтр </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default Main;
