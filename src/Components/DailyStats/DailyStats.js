import DailyStatsCard from './DailyStatsCard'
import { NavLink } from 'react-router-dom'
import classes from './DailyStats.module.css'

const datas = [
    {head:'Calories', val:'2814', sub:'DAILY AVERAGE'},
    {head:'Steps', val:'7234', sub:'DAILY AVERAGE'},
    {head:'Workouts', val:'1h 25min', sub:'ACTIVE'},
    {head:'Sleeping Analysis', val:'7h 35min', sub:'BAD AVERAGE'}
]

const DailyStats = () => {
    return(
        <div className={classes.SectionContainer}>
            <div className={classes.HeadingContainer}>
                <h3>Daily Monitoring</h3>
                <NavLink className={classes.Link} to='/'>See progress &#8594;</NavLink>
            </div>
            <div className={classes.CardContainer}>
                {datas.map(data => <DailyStatsCard key={data.head} data={data} />)}
            </div>
        </div>
    )
}

export default DailyStats