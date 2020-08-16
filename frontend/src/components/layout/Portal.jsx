import { useEffect } from 'react'
import { createPortal } from 'react-dom'

export default function Portal({ children }) {
  const element = document.createElement('div')

  useEffect(() => {
    document.body.appendChild(element)
    return () => document.body.removeChild(element)
  }, [])

  return createPortal(children, element)
}


