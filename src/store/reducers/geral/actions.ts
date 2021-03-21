
import { GeralTypes } from './types';

export const setLoading = (loading: boolean) => ({
  type: GeralTypes.SET_LOADING,
  payload: loading,
});
