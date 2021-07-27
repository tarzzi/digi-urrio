import React from "react"

import BurgerMenu from "./BurgerMenu"

class BurgerNav extends React.Component {

  render() {
    return (
        <>
          <button onClick={() => this.toggleMenu()}>
            <div className='grid grid-cols-3'>
              <div className='col-span-2'>Valikko</div>
              <div className='ml-2'>
                <div className='burger'></div>
                <div className='burger'></div>
                <div className='burger'></div>
              </div>
            </div>
          </button>

          <BurgerMenu ref={el => (this.childMenu = el)} />
        </>
    )
  }

  toggleMenu() {
    this.childMenu.open()
  }
}

export default BurgerNav