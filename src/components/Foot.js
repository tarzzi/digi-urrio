import React from "react"
import {Link} from 'gatsby';

export default function Foot() {
  return (<div className='foot'>
      <div className='grid grid-cols-2 gap-2 w-1/4 mx-auto'>
        <p>Y-Tunnus 3222690-1</p>
        <Link className='tarmo' to='https://urrio.fi'>© Tarmo</Link>
      </div>
  </div>
  )
}