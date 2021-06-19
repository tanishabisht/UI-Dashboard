import { HashRouter, Switch, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import { DailyPlan, Progress } from './Pages'

function App() {
  return (
    <HashRouter>
        <Layout>
          <Switch>
            <Route exact path='/'><DailyPlan /></Route>
            <Route exact path='/progress'><Progress /></Route>
          </Switch>
        </Layout>
    </HashRouter>
  )
}

export default App;
