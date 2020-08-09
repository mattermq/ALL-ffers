import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentPageAC } from '../store/slice'

export default function Pagination({ totalPosts }) {
  const { currentPage, postsPerPage } = useSelector(state => state.slice.view)
  const dispatch = useDispatch()
  const pagesNumbers = [];
  const n = Math.ceil(totalPosts / postsPerPage)
  for (let i = 1; i <= n; i += 1)
    pagesNumbers.push(i)

  const setСurrentPage = (e) => {
    e.preventDefault()
    if (currentPage !== Number(e.target.innerText))
      dispatch(setCurrentPageAC(Number(e.target.innerText)))
  }

  const decreaseCurrentPage = () => {
    if (currentPage > 1)
      dispatch(setCurrentPageAC(currentPage - 1))
  }

  const increaseCurrentPage = () => {
    if (currentPage < n)
      dispatch(setCurrentPageAC(currentPage + 1))
  }
  return (
    <>
      <p>
        <button onClick={decreaseCurrentPage}>(-</button>
        {pagesNumbers.map(page => <button key={page} href="#!" onClick={setСurrentPage}>{page}</button>)}
        <button onClick={increaseCurrentPage}>-)</button>
      </p>
    </>
  );
}
