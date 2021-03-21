/* eslint-disable @typescript-eslint/no-explicit-any */
export function generateQueryString(url: string, params: any): string {
    const queryString = Object.keys(params)
      .filter(k => params[k] !== null && params[k] !== '')
      .map(k => `${encodeURIComponent(k)}=${encodeURIComponent(params[k])}`)
      .join('&');
    let stringReturn = '';
    if (queryString !== '') {
      stringReturn = `?${queryString}`;
    }
    return url + stringReturn;
  }
