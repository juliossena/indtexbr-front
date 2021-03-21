import Axios from 'axios';
import * as Constants from '../../constants/requests';
import * as Auth from './auth';
import {
  ERROR_CONNECTION,
  ERROR_INTERNAL,
  ERROR_ACCESS_DANIED,
  ERROR_NOT_FOUND,
} from '../../constants/messages';

export const headerRequests = async () => ({
  Authorization: await Auth.getAuthorizationToken(),
  'Content-Type': 'application/json',
});

export default class Connect {
  static async call(url: string, method: string, body: object) {
    let answer;
    let config = {};
    const headers = await headerRequests();

    try {
      config = {
        headers,
      };
    } catch (e) {
      config = {};
    }

    switch (method) {
      case Constants.GET:
        answer = Axios.get(url, config);
        break;
      case Constants.POST:
        answer = Axios.post(url, body, config);
        break;
      case Constants.DELETE:
        answer = Axios.delete(url, config);
        break;
      case Constants.PUT:
        answer = Axios.put(url, body, config);
        break;
      case Constants.PATCH:
        answer = Axios.patch(url, body, config);
        break;
      default:
        answer = Axios.get(url, config);
        break;
    }

    return answer;
  }

  static async connect(url: string, method: string, body: object) {
    return Connect.call(url, method, body).catch((error) => {
      if (error.response) {
        switch (error.response.status) {
          case 403:
          case 401:
            throw new Error(ERROR_ACCESS_DANIED);
          case 404:
            throw new Error(ERROR_NOT_FOUND);
          case 400:
          case 422:
            if (error.response.data && error.response.data.message) {
              throw new Error(error.response.data.message);
            }
            throw new Error(ERROR_INTERNAL);
          case 500:
            throw new Error(ERROR_INTERNAL);
          default:
            throw new Error(ERROR_CONNECTION);
        }
      }
      throw new Error(ERROR_CONNECTION);
    });
  }
}

export async function ConnectApiPost(url: string, body: object) {
  return Connect.connect(url, Constants.POST, body);
}

export async function ConnectApiPUT(url: string, body: object) {
  return Connect.connect(url, Constants.PUT, body);
}

export async function ConnectApiPatch(url: string, body: object) {
  return Connect.connect(url, Constants.PATCH, body);
}

export async function ConnectApiGet(url: string) {
  return Connect.connect(url, Constants.GET, {});
}

export async function ConnectApiDelete(url: string) {
  return Connect.connect(url, Constants.DELETE, {});
}
