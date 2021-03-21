
import { SnackBar } from '../../../shared/modals/geral/geral';
import { GeralTypes } from './types';

export const setLoading = (loading: boolean) => ({
  type: GeralTypes.SET_LOADING,
  payload: loading,
});

export const setSnackBar = (snackBar: SnackBar) => ({
  type: GeralTypes.SET_SNACK_BAR,
  payload: snackBar,
});
