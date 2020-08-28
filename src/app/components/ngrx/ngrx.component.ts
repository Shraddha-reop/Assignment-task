import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.model';
import { Observable } from 'rxjs'; 
import { selectData } from '../../store/app.selectors'

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.scss']
})
export class NgrxComponent implements OnInit {

  constructor(  public store: Store<AppState>) { }

  public selectPermissions$: Observable<any> = this.store.select(selectData);

  ngOnInit(): void {
    this.selectPermissions$.subscribe(data => {
      console.log(data);
      
    })
  }

}
