import React from "react"

export default function Banner(props) {
  return (
      <div className='banner w-full mt-10 py-20 block grid grid-cols-1 items-center justify-center'>
        <h1 className='text-center text-5xl my-auto'>{props.title}</h1>
      </div>
  )
}
