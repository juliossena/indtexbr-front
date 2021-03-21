import { SnackBar } from '../../../shared/modals/geral/geral';

export enum GeralTypes {
  SET_LOADING = '@geral/SET_LOADING',
  SET_SNACK_BAR = '@geral/SET_SNACK_BAR',
}

export interface GeralState {
  readonly loading: boolean;
  readonly snackBar: SnackBar;
}
