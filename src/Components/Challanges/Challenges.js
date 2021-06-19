import { NavLink } from 'react-router-dom'
import ChallengeCard from './ChallengeCard'
import classes from './Challenges.module.css'
import four1 from '../../Assets/four1.jpg'
import four2 from '../../Assets/four2.jpg'
import four3 from '../../Assets/four3.jpg'
import four4 from '../../Assets/four4.jpg'

const datas = [
    {img:four1, head:'High Intensity Training', sub:'Running in the nature'},
    {img:four2, head:'Careful evening meal', sub:'Vegetable for better recovery'},
    {img:four3, head:'Meditate for 5 mins', sub:'Train your mind'},
    {img:four4, head:'Skin hydration', sub:'Drink Spinach Smoothie'}
]

const Challenges = () => {
    return (
        <div className={classes.SectionContainer}>
            <div className={classes.HeadingContainer}>
                <h3>Recommended Challenges</h3>
                <NavLink className={classes.Link} to='/'>See progress &#8594;</NavLink>
            </div>
            <div className={classes.CardContainer}>
                {datas.map(data => <ChallengeCard key={data.head} data={data} />)}
            </div>
        </div>
    )
}

export default Challenges