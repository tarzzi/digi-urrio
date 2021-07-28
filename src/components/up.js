import React from "react"
import {Link} from 'gatsby';

export default function Up() {
  return (<>
  <Link to='#navi'>
      <div className='upbtn'>
          <div className='text-center grid grid-cols-1 justify-center items-center'>
            ⬆️
          </div>

      </div>
  </Link>
      </>
  )
}