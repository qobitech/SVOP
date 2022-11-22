import * as authActions from './user/authActions'
import * as globalActions from './global'
import * as resultActions from './resultsActions'

export const actions = {
  ...authActions,
  ...globalActions,
  ...resultActions
}
