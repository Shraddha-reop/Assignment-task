import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.model';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { AppServiceService } from '../services/app-service.service';
import { AppActionType, FetchUserData, FetchUserDataSuccess, FetchUserDataError } from '../store/app.actions';
import { switchMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable()
export class AppEffects {

    @Effect()
    public userData$ = this.actions$.pipe(
        ofType(AppActionType.FETCH_USER_DATA),
        switchMap((action: FetchUserData) => {
            return this.activityService.fetchData().pipe(
                map((obj: any) => new FetchUserDataSuccess(obj)),
                catchError(error => of(new FetchUserDataError(error.status)))
            );
        })
    );
    constructor( private store: Store<AppState>,private actions$: Actions, private activityService: AppServiceService,) {}

}