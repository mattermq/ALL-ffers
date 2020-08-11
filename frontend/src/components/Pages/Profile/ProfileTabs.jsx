import React, { useState } from 'react'
import ProfileTab from './ProfileTab'


export default function ProfileTabBar() {
  const [buttonOneActive, setButtonOneActive] = useState(true)
  const [buttonTwoActive, setButtonTwoActive] = useState(false)
  const [buttonThreeActive, setButtonThreeActive] = useState(false)

  return (
    <nav>
      <ProfileTab tabActive={buttonOneActive} textContent="Избранное" />
      <ProfileTab tabActive={buttonTwoActive} textContent="Начатое" />
      <ProfileTab tabActive={buttonThreeActive} textContent="Законченное" />
    </nav>
  )
}
