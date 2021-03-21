export const removeSpecialCharacters = str => str && str !== '' && str.normalize('NFD').replace(/[^1-9a-zA-Zs]/g, '').toUpperCase();

export const checkHasString = (string, search) => removeSpecialCharacters(string)
  .indexOf(removeSpecialCharacters(search)) > -1;

export const filterArraySearch = (array, idFilter, search) => array
  .filter(object => checkHasString(object[idFilter], search));
