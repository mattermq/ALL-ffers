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
    <div className="wrap_profile">
      <div className="prof_blockCards">
        <div className="blockCards_tabs">
          {/* <div className="tab">В избранном</div>
            <div className="tab">В работе</div>
            <div className="tab">Сделано</div> */}
        </div>
        <ProfileFeed />
        <div className="prof_blockStat">
          <div className="blockStat_graf">Статистика</div>
        </div>
      </div>
    </div>
  )
}
