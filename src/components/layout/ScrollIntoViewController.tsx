import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollIntoViewController = ({ children }: { children: any }) => {
  const { pathname } = useLocation()

  const [prevLocation, setPrevLocation] = useState<string | null>(null)

  useEffect(() => {
    if (pathname !== prevLocation) {
      const body = document.querySelector('#root')
      body?.scrollIntoView({ behavior: 'smooth' })
      // eslint-disable-next-line
	  setPrevLocation(() => pathname );
    }
    return () => {
      setPrevLocation(() => null)
    }
  // eslint-disable-next-line
	}, [pathname]);

  return <>{children}</>
}
export default ScrollIntoViewController
