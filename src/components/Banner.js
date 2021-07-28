import React from "react"

export default function Banner(props) {
  return (
      <div id={props.idName} className='banner w-full lg:mt-10 md:mt-10 sm:mt-0 py-20 block grid grid-cols-1 items-center justify-center'>
        <h1 className='text-center text-5xl my-auto'>{props.title}</h1>
        <p className='text-center my-5 text-shadow'>{props.subtitle}</p>
      </div>
  )
}
