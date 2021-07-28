import React from "react"
import Nav from '../components/Nav'
import Foot from '../components/Foot'

export default function Layout({ children }) {
  return (
      <div>
        <Nav />
        {children}
        <Foot />
      </div>
  )
}