import { Dispatch } from 'redux';
import { ActionType } from '../action-types';
import { Action } from '../actions';

export const depositMoney = (amount: number) => (dispatch: Dispatch<Action>): void => {
  dispatch({
    type: ActionType.DEPOSIT,
    payload: amount,
  });
};

export const withdrawMoney = (amount: number) => (dispatch: Dispatch<Action>): void => {
  dispatch({
    type: ActionType.WITHDRAW,
    payload: amount,
  });
};

export const bankrupt = () => (dispatch: Dispatch<Action>): void => {
  dispatch({
    type: ActionType.BANKRUPT,
  });
};
