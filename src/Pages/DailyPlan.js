import { DailyStats, Challenges, ChallengeTips } from '../Components'
import "./Pages.css"

const DailyPlan = () => {
  return (
    <main>
      <DailyStats />
      <br/><br/>
      <ChallengeTips />
      <br/><br/>
      <Challenges />
    </main>
  )
}

export default DailyPlan