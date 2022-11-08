import * as authActions from './user/authActions'
import * as globalActions from './global'

export const actions = {
  ...authActions,
  ...globalActions
}
