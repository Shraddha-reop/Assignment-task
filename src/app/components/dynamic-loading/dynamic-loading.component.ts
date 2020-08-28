import { Component, OnInit } from '@angular/core';
import { FlexboxWebsiteComponent } from '../flexbox-website/flexbox-website.component'

@Component({
  selector: 'app-dynamic-loading',
  templateUrl: './dynamic-loading.component.html',
  styleUrls: ['./dynamic-loading.component.scss']
})
export class DynamicLoadingComponent implements OnInit {

  constructor() { }
  url = "https://unpkg.com/ink-components";
  xAxis = [-6.28, 6.28]
  elementUrl = '../flexbox-website/flexbox-website.component';
  ngOnInit(): void {
  }
}
