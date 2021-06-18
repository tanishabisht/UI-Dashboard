import { HashRouter, Switch, Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import { DailyPlan } from './Pages'

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Layout>
          <Switch>
            <Route exact path='/' component={DailyPlan} />
          </Switch>
        </Layout>
      </div>
    </HashRouter>
  )
}

export default App;
