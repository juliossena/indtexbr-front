/* eslint-disable import/no-cycle */
import Axios from 'axios';
import * as LocalStorageProxy from './localStorageProxy';
import { goTo } from '../navigation';
import { AUTHORIZATION_VALUE_PREFIX } from '../../constants/geral';
import { AUTHORIZATION_KEY } from '../../constants/keysLocalStorage';
import { expiresTokenJwt } from '../token';
import { URL_REFRESH_TOKEN } from './urls';

const WARRANTY_TIME = 300000;

const valueIsValid = (value: string) => (value
    && (typeof value === 'string')
    && value.length > 7
    && value.startsWith(AUTHORIZATION_VALUE_PREFIX));

export const unsetAuthorizationToken = () => {
  LocalStorageProxy.removeItem(AUTHORIZATION_KEY);
};

export const setAuthorizationToken = (value: string) => {
  if (!valueIsValid(value)) {
    unsetAuthorizationToken();
  }

  LocalStorageProxy.setItem(AUTHORIZATION_KEY, value);
};

export const authorizationTokenExists = () => LocalStorageProxy.getItem(AUTHORIZATION_KEY) !== null;

export const getTokenValue = () => {
  const value = LocalStorageProxy.getItem(AUTHORIZATION_KEY);
  if (value === null) {
    return '';
  }
  return value;
};

export const getAuthorizationValue = () => `${AUTHORIZATION_VALUE_PREFIX} ${getTokenValue()}`;

export const doLogout = () => {
  LocalStorageProxy.clear();
  unsetAuthorizationToken();
  goTo(process.env.REACT_APP_URL_START || '/');
};

export const getAuthorizationToken = async () => {
  const expiresToken = expiresTokenJwt();
  if (expiresToken) {
    if ((new Date(expiresToken).getTime() - WARRANTY_TIME) > new Date().getTime()) {
      return getAuthorizationValue();
    }
    const config = {
      headers: {
        Authorization: getAuthorizationValue(),
        'Content-Type': 'application/json',
      },
    };

    await Axios.get(URL_REFRESH_TOKEN, config).then((returnRefresh) => {
      unsetAuthorizationToken();
      setAuthorizationToken(returnRefresh.data.token);
    }).catch(() => {
      doLogout();
    });
  }
  return getAuthorizationValue();
};

export const isLogged = () => authorizationTokenExists();
