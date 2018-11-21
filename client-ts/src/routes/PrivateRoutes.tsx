import React from 'react'
import { connect } from 'react-redux'
import { Redirect, Route } from 'react-router-dom'
import { routes } from './constants'

interface Props {
  userId: string
  component: React.Component
}
const PrivateRoutes: React.SFC<Props> = props => {
  const { userId, component: Component, ...rest } = props

  if (!userId) return <Redirect to={routes.login} />
  return <Route {...rest} render={props => <Component {...props} />} />
}

const mapSateToProps = state => ({
  userId: state.user.getId()
})
export default connect(mapSateToProps)(PrivateRoutes)
