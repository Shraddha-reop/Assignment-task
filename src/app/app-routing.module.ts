import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexboxWebsiteComponent } from './components/flexbox-website/flexbox-website.component';
// import { FlexboxImageGallaryComponent } from './components/flexbox-image-gallary/flexbox-image-gallary.component';
import { DynamicLoadingComponent } from './components/dynamic-loading/dynamic-loading.component';
// import { AngularMaterialComponent } from './components/angular-material/angular-material.component';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { NgrxComponent } from './components/ngrx/ngrx.component';


const routes: Routes = [
  {
    path: 'flexbox-website',
    component: FlexboxWebsiteComponent
  },
  // {
  //   path: 'flexbox-image-gallary',
  //   component: FlexboxImageGallaryComponent
  // },
  {
    path: 'dynamic-component-loading',
    component: DynamicLoadingComponent
  },
  // {
  //   path: 'angular-material',
  //   component: AngularMaterialComponent
  // },
  {
    path: 'bootstrap',
    component: BootstrapComponent
  },
  {
    path: 'ngrx',
    component: NgrxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
