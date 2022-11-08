import * as utils from './utils'

export const clearAction = (actionType: utils.I_ACTION_TYPE) => {
  return utils.clearHttp({
    actionType
  })
}
