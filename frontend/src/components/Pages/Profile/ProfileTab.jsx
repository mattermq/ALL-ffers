import React, { useState } from 'react'
import classNames from 'classnames'

export default function ProfileTab({ tabActive, textContent }) {

  const classes = classNames('tab', { tabActive })

  return (
    <button className={classes}>{textContent}</button>
  )
}
