import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: 'login', loadChildren: () => import('./routed/login/login.module').then(m => m.LoginModule) },
  { path: 'issue', loadChildren: () => import('./routed/issue/issue.module').then(m => m.IssueModule) },
  { path: 'repository', loadChildren: () => import('./routed/repository/repository.module').then(m => m.RepositoryModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
