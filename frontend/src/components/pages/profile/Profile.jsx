import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import ProfileChart from './ProfileChart'
import ProfileTabs from './ProfileTabs'
import ProfileFeed from './ProfileFeed'
import FormStartProject from './FormStartProject'

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
