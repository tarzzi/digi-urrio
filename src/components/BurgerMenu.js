import React, { useImperativeHandle, useRef } from "react"

import { Link } from "gatsby"

import * as styles from "./menu.module.scss"

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
    }
  }

  render() {
    return (
        <div
            role="button"
            tabIndex="0"
            className={`${styles.menu} ${this.state.open ? `${styles.open}` : ""}`}
            onClick={() => this.close()}
            onKeyDown={() => this.close()}
        >
          <Link className='transition-all duration-200' to='/'>Digi-Urrio</Link>
          <Link className='transition-all duration-200' to='/nettisivut'>Nettisivut</Link>
          <Link className='transition-all duration-200' to='/digituki' >Digituki</Link>
          <Link className='transition-all duration-200' to='/tietoa-minusta' >Tietoa minusta</Link>
          <Link className='transition-all duration-200' to='/ota-yhteytta' >Ota yhteyttä</Link>

        </div>
    )
  }

  close() {
    this.setState({ open: false })
  }

  open() {
    this.setState({ open: true })
  }
}

export default React.forwardRef((props, ref) => {
  const menuRef = useRef()

  useImperativeHandle(ref, () => ({
    open() {
      menuRef.current.open()
    },
  }))

  return <BurgerMenu ref={menuRef} {...props} />
})