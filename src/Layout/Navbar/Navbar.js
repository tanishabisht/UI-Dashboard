import { NavLink } from 'react-router-dom'
import classes from "./Navbar.module.css"
import avatar from "../../Assets/profile.png"

const Navbar = props => {
  const { openSidenav } = props

  return (
    <nav className={classes.Nav}>
      <div className={classes.IconHam} onClick={openSidenav}>
        <i className="fa fa-bars"></i>
      </div>
      <div className={classes.Nav__left}>
        <div className={classes.SearchInputContainer}>
          <i className="fa fa-search"></i>
          <input placeholder='Search something here ...' className={classes.SearchInput} />
        </div>
      </div>
      <div className={classes.Nav__right}>
        <i className="fa fa-bell"></i>
        <img className={classes.Nav_avatar} width="30" src={avatar} alt="avatar" />
        <NavLink className={classes.UserName} to='/'>Tanisha Bisht</NavLink>
      </div>
    </nav>
  )
}

export default Navbar