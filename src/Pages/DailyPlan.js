import { DailyStats, Challenges } from '../Components'
import "./Pages.css"

const DailyPlan = () => {
  return (
    <main>
      <DailyStats />
      <br/><br/>
      <Challenges />
    </main>
  )
}

export default DailyPlan