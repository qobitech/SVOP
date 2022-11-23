import * as authActions from './user/authActions'
import * as globalActions from './global'
import * as resultActions from './resultsActions'
import * as otherActions from './otherActions'

export const actions = {
  ...authActions,
  ...globalActions,
  ...resultActions,
  ...otherActions
}
