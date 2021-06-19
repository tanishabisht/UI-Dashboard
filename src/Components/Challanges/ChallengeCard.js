import classes from './ChallengeCard.module.css'

const ChallengeCard = props => {
    const { data } = props
    return(
        <div className={classes.Card}>
            <img className={classes.Img} src={data.img} alt='bg-img' />
            <div className={classes.Content}>
                <i class="fa fa-apple"></i>
                <div className={classes.Text}>
                    <h5>{data.head}</h5>
                    <h6>{data.sub}</h6>
                </div>
            </div>
        </div>
    )
}

export default ChallengeCard