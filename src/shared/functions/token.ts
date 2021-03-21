/* eslint-disable import/no-cycle */
import { getTokenValue } from './connection/auth';

const objetoJwt = () => {
  let tokenValor = null;
  try {
    tokenValor = getTokenValue().split('.');
  } catch (e) {
    return null;
  }
  if (!tokenValor || tokenValor.length <= 1) return null;
  return JSON.parse(atob(tokenValor[1]));
};

export const userNameJwt = () => {
  const corpoJwt = objetoJwt();
  if (corpoJwt && corpoJwt.idUser) return corpoJwt.idUser;
  return '';
};

export const expiresTokenJwt = () => {
  const corpoJwt = objetoJwt();
  if (corpoJwt && corpoJwt.expiresToken) return corpoJwt.expiresToken;
  return null;
};
