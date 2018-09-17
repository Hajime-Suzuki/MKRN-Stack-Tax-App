import User from './model'
import { FETCH_ENTITIES_SUCCESS } from '..'

const userReducer = (state = new User(), { type, payload } = {}) => {
  switch (type) {
    case FETCH_ENTITIES_SUCCESS:
      return state.setUser(payload)
    case 'test':
      return state.test()
    default:
      return state
  }
}

export default userReducer