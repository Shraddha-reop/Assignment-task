import { Action } from '@ngrx/store';

export enum AppActionType {
    FETCH_USER_DATA = 'Activity: FETCH_USER_DATA',
    FETCH_USER_DATA_SUCCESS = 'Activity: FETCH_USER_DATA_SUCCESS',
    FETCH_USER_DATA_ERROR = 'Activity: FETCH_USER_DATA_ERROR'
}
export class FetchUserData implements Action {
    readonly type = AppActionType.FETCH_USER_DATA;
    constructor() {}
}

export class FetchUserDataSuccess implements Action {
    readonly type = AppActionType.FETCH_USER_DATA_SUCCESS;
    constructor(public payload: any) {}
}

export class FetchUserDataError implements Action {
    readonly type = AppActionType.FETCH_USER_DATA_ERROR;
    constructor(public error: any) {}
}
export type AppAction = 
| FetchUserData
| FetchUserDataSuccess;