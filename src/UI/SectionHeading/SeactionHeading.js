import { NavLink } from 'react-router-dom'
import classes from './SeactionHeading.module.css'

const SectionHeader = props => {
    const { heading } = props
    return (        
        <div className={classes.HeadingContainer}>
            <h3>{heading}</h3>
            <NavLink className={classes.Link} to='/'>See progress &#8594;</NavLink>
        </div>
    )
}

export default SectionHeader