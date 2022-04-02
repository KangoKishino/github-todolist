import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoryRoutingModule } from './repository-routing.module';
import { RepositoryComponent } from './pages/repository.component';


@NgModule({
  declarations: [
    RepositoryComponent
  ],
  imports: [
    CommonModule,
    RepositoryRoutingModule
  ]
})
export class RepositoryModule { }
