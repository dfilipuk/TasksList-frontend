import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './components/app/app.component';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialComponents } from './material-components.module';
import { FormsModule } from '@angular/forms';
import { StorageService } from './services/storage.service';
import { AuthorizationService } from './services/authorization.service';
import { HttpClientModule } from '@angular/common/http';
import { TaskService } from './services/task.service';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LoginComponent
  ],
  imports: [
    MaterialComponents,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [StorageService, AuthorizationService, TaskService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
