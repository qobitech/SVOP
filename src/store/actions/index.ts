import * as globalActions from './global'
import * as electionActions from './electionActions'
import * as locationActions from './locationActions'
import * as otherActions from './otherActions'

export const actions = {
  ...globalActions,
  ...electionActions,
  ...locationActions,
  ...otherActions
}
