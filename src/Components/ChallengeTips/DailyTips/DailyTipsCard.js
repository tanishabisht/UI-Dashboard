import { NavLink } from 'react-router-dom'
import classes from './DailyTipsCard.module.css'

const DailyTipsCard = props => {
    const { data } = props
    return (
        <div className={classes.Card}>
            <h4>{data.head}</h4>
            <p>{data.sub}</p>
            <NavLink className={classes.CardLink} to='/'> &#10095; Find out more </NavLink>
        </div>
    )
}

export default DailyTipsCard