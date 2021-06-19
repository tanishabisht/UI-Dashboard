import DailyStatsCard from './DailyStatsCard'
import classes from './DailyStats.module.css'
import { SeactionHeading } from '../../UI'

const datas = [
    {head:'Calories', val:'2814', sub:'DAILY AVERAGE', light:'#F3F9F9', dark:'#6DD48D'},
    {head:'Steps', val:'7234', sub:'DAILY AVERAGE', light:'#FFEFFF', dark:'#EA78BE'},
    {head:'Workouts', val:'1h 25min', sub:'ACTIVE', light:'#ECF9FF', dark:'#74C8DD'},
    {head:'Sleeping Analysis', val:'7h 35min', sub:'BAD AVERAGE', light:'#FEF0ED', dark:'#FE5D45'}
]

const DailyStats = () => {
    return(
        <div className={classes.SectionContainer}>
            <SeactionHeading heading='Daily Monitoring' />
            <div className={classes.CardContainer}>
                {datas.map(data => <DailyStatsCard key={data.head} data={data} />)}
            </div>
        </div>
    )
}

export default DailyStats