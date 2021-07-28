import React from "react"
import Nav from '../components/Nav'
import Foot from '../components/Foot'
import Up from '../components/up'

export default function Layout({ children }) {
  return (
      <div>
        <Nav />
        {children}
        <Foot />
        <Up />
      </div>
  )
}