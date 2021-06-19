import { SeactionHeading } from '../../../UI'
import DailyTipsCard from './DailyTipsCard'
import classes from './DailyTips.module.css'

const datas = [
    {head:'Mindfulness', sub:'Do one hour yoga to improve your body balance, flexibility and strength'},
    {head:'Get more out of your day', sub:'Wake up 40 min before the usual and go for morning walk in the park'},
    {head:'Early Bedtime', sub:'Go to sleep more at the same hour every night'}
]

const DailyTips = () => {
    return (
        <div className={classes.SectionContainer}>
            <SeactionHeading heading='Daily Tips' />
            <div className={classes.CardContainer}>
                {datas.map(data => <DailyTipsCard key={data.head} data={data} />)}
            </div>
        </div>
    )
}

export default DailyTips