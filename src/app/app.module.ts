import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RepositoryComponent } from './repository/repository.component';
import { EditComponent } from './routed/issue/pages/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RepositoryComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
