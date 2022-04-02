import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RepositoryComponent } from './repository/repository.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'repository', component: RepositoryComponent },
  { path: 'issue', loadChildren: () => import('./routed/issue/issue.module').then(m => m.IssueModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
