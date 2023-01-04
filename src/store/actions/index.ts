import * as globalActions from './global'
import * as votingActions from './votingActions'
import * as authActions from './authActions'
import * as categoryActions from './categoryActions'
import * as candidatesActions from './candidatesActions'
import * as otherActions from './otherActions'

export const actions = {
  ...globalActions,
  ...otherActions,
  ...votingActions,
  ...categoryActions,
  ...authActions,
  ...candidatesActions
}
