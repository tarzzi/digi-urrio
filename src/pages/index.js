import * as React from "react"




const IndexPage = () => {
  return (
    <main>
      <div id='banner' className='w-full block bg-black h-80 grid grid-cols-1 items-center justify-center'>
          <h1 className='text-center text-5xl text-white my-auto'>Yrityksen nimi</h1>
      </div>
      <div id='intro'>

      </div>
      <div id='services' className='py-10 grid grid-cols-2 grid-rows-1 gap-2 justify-center items-center bg-gray-100'>
        <div className='card'>
          <p>X</p>
          <p>
            Lorem ipsum dolor sit amet asd, maximus nec ut nisl.
          </p>
        </div>
        <div className='card'>
          Lorem ipsum dolor sit amet asd, maximus nec ut nisl.
        </div>
      </div>
      </main>
  )
}

export default IndexPage
