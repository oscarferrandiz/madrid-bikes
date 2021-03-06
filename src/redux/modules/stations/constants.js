import { actionPrefix } from '@/redux/utils';

const prefix = actionPrefix('STATIONS');

const SET = prefix('SET');
const SET_LOADING = prefix('SET_LOADING');
const SET_ERROR = prefix('SET_ERROR');
const SET_FILTER = prefix('SET_FILTER');

export {
  SET,
  SET_LOADING,
  SET_ERROR,
  SET_FILTER
};
