import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './app.model';
import { FetchUserData } from './store/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(  public store: Store<AppState>,){
  }
  ngOnInit(){
    this.store.dispatch(new FetchUserData());
  }
}
