import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ExpenseListComponent} from './dashboard/expense-list/expense-list.component';
import {ExpenseCategoryListComponent} from './dashboard/expense-category-list/expense-category-list.component';
import {ExpenseCategoryDetailComponent} from './dashboard/expense-category-detail/expense-category-detail.component';
import {ExpenseDetailComponent} from './dashboard/expense-detail/expense-detail.component';
import {AuthGuard} from './_guards/auth.guard';
import {TestErrorsComponent} from './errors/test-errors/test-errors.component';
import {NotFoundComponent} from './errors/not-found/not-found.component';
import {ServerErrorComponent} from './errors/server-error/server-error.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [AuthGuard],
    children: [
      {path: 'dashboard', component: ExpenseCategoryListComponent, canActivate: [AuthGuard]},
      {path: 'dashboard/expense-category/:id', component: ExpenseCategoryDetailComponent},
      {path: 'dashboard/expense-category/:id/expense-list', component: ExpenseListComponent, pathMatch: 'full'},
      {path: 'dashboard/expense-category/expense-list/:id', component: ExpenseDetailComponent}
    ]
  },
  {path: 'errors', component: TestErrorsComponent},
  {path: 'not-found', component: NotFoundComponent},
  {path: 'server-error', component: ServerErrorComponent},
  {path: '**', component: NotFoundComponent, pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
