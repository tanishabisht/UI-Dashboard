import ChallengeCard from './ChallengeCard'
import { SeactionHeading } from '../../UI'
import classes from './Challenges.module.css'
import four1 from '../../Assets/four1.jpg'
import four2 from '../../Assets/four2.jpg'
import four3 from '../../Assets/four3.jpg'
import four4 from '../../Assets/four4.jpg'

const datas = [
    {img:four1, head:'High Intensity Training', sub:'Running in the nature', color:'#7FACA6'},
    {img:four2, head:'Careful evening meal', sub:'Vegetable for better recovery', color:'#F59CA0'},
    {img:four3, head:'Meditate for 5 mins', sub:'Train your mind', color:'#B682D5'},
    {img:four4, head:'Skin hydration', sub:'Drink Spinach Smoothie', color:'#1EC8DF'}
]

const Challenges = () => {
    return (
        <div className={classes.SectionContainer}>
            <SeactionHeading heading='Recommended Challenges' />
            <div className={classes.CardContainer}>
                {datas.map(data => <ChallengeCard key={data.head} data={data} />)}
            </div>
        </div>
    )
}

export default Challenges