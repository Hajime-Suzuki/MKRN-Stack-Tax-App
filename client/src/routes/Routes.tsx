import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import LoginAndSignupFormContainer from 'src/components/loginAndSignup/LoginAndSignupFormContainer'
import DashBoardComponent from '../components/dashBoard/DashBoardComponent'
import AddProjectFormContainer from '../components/project/AddProjectFormContainer'
import ProjectsListComponent from '../components/project/ProjectsListComponent'
import SingleProjectComponent from '../components/project/SingleProjectComponent'
import TopPage from '../components/topPage/TopPage'
import { MainWrapper } from '../styles/sharedStyles'
import { routes } from './constants'
import PrivateRoutes from './PrivateRoutes'
import NavBarContainer from 'src/components/UI/NavBar/NavBarContainer'

class Routes extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route path={routes.top} component={NavBarContainer} />
        <MainWrapper>
          <Switch>
            <Route path="/" exact component={TopPage} />
            <PrivateRoutes
              path={routes.dashboard}
              exact
              component={DashBoardComponent}
            />
            <PrivateRoutes
              path={routes.projects}
              exact
              component={ProjectsListComponent}
            />
            <PrivateRoutes
              path={routes.addProject}
              exact
              component={AddProjectFormContainer}
            />
            <PrivateRoutes
              path={routes.singleProject()}
              exact
              component={SingleProjectComponent}
            />
            <Route
              path={routes.login}
              exact
              component={LoginAndSignupFormContainer}
            />
            <Route
              path={routes.signup}
              exact
              component={LoginAndSignupFormContainer}
            />
          </Switch>
        </MainWrapper>
      </React.Fragment>
    )
  }
}

export default Routes