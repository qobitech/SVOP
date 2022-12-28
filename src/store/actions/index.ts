import * as globalActions from './global'
import * as votingActions from './votingActions'
import * as otherActions from './otherActions'

export const actions = {
  ...globalActions,
  ...otherActions,
  ...votingActions
}
