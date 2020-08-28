import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LazyElementsModule } from '@angular-extensions/elements';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
// import { FlexboxImageGallaryComponent } from './components/flexbox-image-gallary/flexbox-image-gallary.component';
import { FlexboxWebsiteComponent } from './components/flexbox-website/flexbox-website.component';
import { DynamicLoadingComponent } from './components/dynamic-loading/dynamic-loading.component';
import { NgrxComponent } from './components/ngrx/ngrx.component';
// import { AngularMaterialComponent } from './components/angular-material/angular-material.component';
import { BootstrapComponent } from './components/bootstrap/bootstrap.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './store/app.reducer'
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './effects/app.effects';
import { InternationalizationComponent } from './components/internationalization/internationalization.component'
@NgModule({
  declarations: [
    AppComponent,
    FlexboxWebsiteComponent,
    DynamicLoadingComponent,
    NgrxComponent,
    BootstrapComponent,
    InternationalizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    LazyElementsModule,
    HttpClientModule,
    StoreModule.forRoot({
      appModel: appReducer,
  }),
  EffectsModule.forRoot([AppEffects]),
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatSelectModule,
  MatInputModule,
  MatRadioModule,
  MatMenuModule,
  MatIconModule
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
