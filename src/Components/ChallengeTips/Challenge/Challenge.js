import { NavLink } from 'react-router-dom'
import classes from './Challenge.module.css'

const Challenge = () => {
    return (
        <div className={classes.SectionContainer}>
            <div className={classes.HeadingContainer}>
                <h3>Challenge</h3>
                <NavLink className={classes.Link} to='/'>See progress &#8594;</NavLink>
            </div>
            <div className={classes.CardContainer}>
                <div className={classes.Content}>
                    <h2><i class="fa fa-apple"></i> Early Morning Smoothie</h2>
                    <p>Sart your day with energy. For breakfast prepare a powerful and healthy smoothie rich in potassium and vitamin C. It will boost your metabolism.</p>
                    <br/><h3>RECEPIE</h3>
                    <div className={classes.Recepie}>
                        <ul>
                            <li>130g banana</li>
                            <li>1 whole kiwi</li>
                            <li>250mL orange juice</li>
                            <li>3 spoons of yogurt</li>
                        </ul>
                        <div className={classes.VerticalLine}></div>
                        <h1 style={{color:'#6E73C2'}}>420 cal</h1>
                    </div>
                    <button className={classes.BtnPrimary}>ADD CHALLENGE</button>
                    <button className={classes.BtnSecondary}>CHALLENGE FRIEND</button>
                </div>
            </div>
        </div>
    )
}

export default Challenge