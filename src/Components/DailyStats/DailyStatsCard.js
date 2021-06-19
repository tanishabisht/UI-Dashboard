import classes from './DailyStatsCard.module.css'

const DailyStats = props => {
    const { data } = props
    return(
        <div className={classes.Card}>
            <i class="fa fa-apple"></i>
            <div className={classes.Content}>
                <h4>{data.head}</h4>
                <h2>{data.val}</h2>
                <h5>{data.sub}</h5>
            </div>
        </div>
    )
}

export default DailyStats