import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import ProfileChart from './ProfileChart'
import ProfileFeed from './ProfileFeed'

export default function Profile() {
  const isAuth = useSelector(state => state.slice.user.isAuth)
  const history = useHistory()

  if (!isAuth)
    history.push("/")

  return (
    <>
      <ProfileFeed />
    </>
  )
}
