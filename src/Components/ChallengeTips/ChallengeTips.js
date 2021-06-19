import Challenge from './Challenge/Challenge'
import DailyTips from './DailyTips/DailyTips'
import classes from './ChallengeTips.module.css'

const ChallengeTips = () => {
    return (
        <div className={classes.SectionContainer}>
            <div className={classes.Section1}><Challenge /></div>
            <div className={classes.Section2}><DailyTips /></div>
        </div>
    )
}

export default ChallengeTips