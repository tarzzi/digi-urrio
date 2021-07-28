import React from "react"
import { AnchorLink} from 'gatsby-plugin-anchor-links';


export default function Up() {
  return (<>
  <AnchorLink to='/'>
      <div className='upbtn'>
          <div className='text-center font-2 text-4xl grid grid-cols-1 justify-center items-center'>
            ⬆️
          </div>
      </div>
  </AnchorLink>
      </>
  )
}
