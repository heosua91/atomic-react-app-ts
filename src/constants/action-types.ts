import { keyMirror } from './../utils/utils';

export const ActionTypes = keyMirror({
  USER_LOGIN: undefined,
  USER_LOGIN_SUCCESS: undefined,
  USER_LOGIN_FAILURE: undefined,
  USER_LOGOUT: undefined,
  USER_LOGOUT_SUCCESS: undefined,
  USER_LOGOUT_FAILURE: undefined,

  I18N_SET_LANGUAGE: undefined,
  I18N_SET_LANGUAGE_SUCCESS: undefined,
});

export default {};