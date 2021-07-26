import React from "react"

export default function ServiceCard(props) {
  return (
      <div className='p-4 grid gap-2 lg:grid-cols-3 sm:grid-cols-1 serviceCard'>
        <div><h3>{props.title}</h3> {props.price}</div>
          {props.children}
      </div>
  )
}