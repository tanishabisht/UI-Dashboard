import { NavLink } from 'react-router-dom'
import classes from "./Sidebar.module.css"
import logo from "../../Assets/profile.png"

const Sidebar = props => {
  const { isSidenavOpen, closeSidenav } = props
  var sidebar_responsive = ''
  if(isSidenavOpen) sidebar_responsive = classes.SidebarResponsive
   

  return (
    <div className={`${sidebar_responsive} ${classes.Sidebar}`}>

      <i onClick={closeSidenav} className={`fa fa-times ${classes.IconCross}`} ></i>

      <div className={classes.Sidebar__heading}>
        <div className={classes.AvatarBorder}><img className={classes.Avatar} src={logo} alt="logo" /></div>
        <p>Daily Points</p>
        <h1>2,466</h1>
      </div>


      <div className={classes.Sidebar__menu}>
        <h2>DASHBOARD</h2>
        <NavLink activeClassName={classes.Sidebar__activeLink} className={classes.Sidebar__link} to="/overview" exact>
          <i className="fa fa-user-secret"></i> Overview
        </NavLink>
        <NavLink activeClassName={classes.Sidebar__activeLink} className={classes.Sidebar__link} to="/" exact>
          <i className="fa fa-building-o"></i> Daily Plan
        </NavLink>
        <NavLink activeClassName={classes.Sidebar__activeLink} className={classes.Sidebar__link} to="/progress" exact>
          <i className="fa fa-wrench"></i> Progress
        </NavLink>
        <h2>PERSONAL TIPS</h2>
        <NavLink activeClassName={classes.Sidebar__activeLink} className={classes.Sidebar__link} to="/nutrition" exact>
          <i className="fa fa-question"></i> Nutrition
        </NavLink>
        <NavLink activeClassName={classes.Sidebar__activeLink} className={classes.Sidebar__link} to="/sport" exact>          
          <i className="fa fa-sign-out"></i> Sport
        </NavLink>
        <NavLink activeClassName={classes.Sidebar__activeLink} className={classes.Sidebar__link} to="/beauty" exact>
          <i className="fa fa-calendar-check-o"></i> Beauty
        </NavLink>
        <NavLink activeClassName={classes.Sidebar__activeLink} className={classes.Sidebar__link} to="/health" exact>
          <i className="fa fa-files-o"></i> Health
        </NavLink>
        <NavLink activeClassName={classes.Sidebar__activeLink} className={classes.Sidebar__link} to="/mindfulness" exact>
          <i className="fa fa-archive"></i> Mindfulness
        </NavLink>
        <h2>YOUR DATA</h2>
        <NavLink activeClassName={classes.Sidebar__activeLink} className={classes.Sidebar__link} to="/blood" exact>
          <i className="fa fa-money"></i> Blood
        </NavLink>
        <NavLink activeClassName={classes.Sidebar__activeLink} className={classes.Sidebar__link} to="/dna" exact>
          <i className="fa fa-briefcase"></i> DNA
        </NavLink>
        <NavLink activeClassName={classes.Sidebar__activeLink} className={classes.Sidebar__link} to="/microbiome" exact>
          <i className="fa fa-power-off"></i> Microbiome
        </NavLink>
        <NavLink activeClassName={classes.Sidebar__activeLink} className={classes.Sidebar__link} to="/questionnaire" exact>
          <i className="fa fa-handshake-o"></i> Questionnaire
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;