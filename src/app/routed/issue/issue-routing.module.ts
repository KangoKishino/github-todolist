import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IssueComponent } from './pages/issue.component';
import { EditComponent } from './pages/edit/edit.component';
import { IssueDetailComponent } from './pages/issue-detail/issue-detail.component';

const routes: Routes = [
  { path: '', component: IssueComponent },
  { path: ':id', component: IssueDetailComponent },
  { path: ':id/edit', component: EditComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IssueRoutingModule { }
