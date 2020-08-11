import React, { useState, useEffect, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'

export default function Portal({ children }) {

  const elRef = useRef(null)
  if (!elRef.current) {
    const div = document.createElement('div')
    elRef.current = div
  }

  // const escFunction = useCallback((event) => {
  //   if (event.keyCode === 27) {
  //     props.onCancel()
  //   }
  // }, [])

  useEffect(() => {
    const modalRoot = document.getElementById('modal')
    modalRoot.appendChild(elRef.current)
    // document.addEventListener("keydown", escFunction, false);
    return () => {
      modalRoot.removeChild(elRef.current)
      // document.removeEventListener("keydown", escFunction, false);
    }
  }, [])

  return createPortal(children, elRef.current)
}
