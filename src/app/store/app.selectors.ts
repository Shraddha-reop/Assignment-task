import { AppState } from '../app.model';
import { createSelector } from '@ngrx/store';
import { AppModelState } from '../models/appModel.model';

export const selectApp = (state: AppState) => state.appModel;

export const selectData = createSelector(
    selectApp,
    (state: AppModelState) => {
        return state.data;
    }
);
