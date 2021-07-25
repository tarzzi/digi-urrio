import React from "react"

export default function ServiceCard({ children }) {
  return (
      <div className='p-4 grid gap-2 lg:grid-cols-3 sm:grid-cols-1 serviceCard'>
        {children}
      </div>
  )
}