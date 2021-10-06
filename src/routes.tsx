import { Switch, Route } from 'react-router-dom';

import Intro from './pages/Intro';

const Routes = (): JSX.Element => {
  return (
    <Switch>
      <Route path="/" exact component={Intro} />
    </Switch>
  )
}

export default Routes;