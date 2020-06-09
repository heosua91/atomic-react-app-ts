import { handleActions } from 'redux-actions';
import immutable from 'immutability-helper';

import { ActionTypes } from '../../constants/index';
import * as utils from '../../utils/utils';

export const userStateDefault: userState = {
  isAuthenticated: utils.getStorage('authToken') !== null,
  authToken: utils.getStorage('authToken')
};

export default {
  user: handleActions(
    {
      [ActionTypes.USER_LOGIN]: state => immutable(state, {}),
      [ActionTypes.USER_LOGIN_SUCCESS]: (state, action) => {
        const { authToken } = action.payload;
        utils.setStorage('authToken', authToken === null ? '' : authToken);
        return immutable(state, {
          isAuthenticated: { $set: true }
        });
      },
      [ActionTypes.USER_LOGOUT]: state => immutable(state, { }),
      [ActionTypes.USER_LOGOUT_SUCCESS]: state => {
        utils.removeStorage('authToken');
        return immutable(state, {
          isAuthenticated: { $set: false },
        });
      }
    },
    userStateDefault
  )
};