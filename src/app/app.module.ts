import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NavComponent} from './nav/nav.component';
import {FormsModule} from '@angular/forms';
import {HomeComponent} from './home/home.component';
import {RegisterComponent} from './register/register.component';
import {ExpenseListComponent} from './dashboard/expense-list/expense-list.component';
import {ExpenseDetailComponent} from './dashboard/expense-detail/expense-detail.component';
import {ListsComponent} from './lists/lists.component';
import {ExpenseCategoryListComponent} from './dashboard/expense-category-list/expense-category-list.component';
import {ExpenseCategoryDetailComponent} from './dashboard/expense-category-detail/expense-category-detail.component';
import {SharedModule} from './_modules/shared.module';
import { TestErrorsComponent } from './errors/test-errors/test-errors.component';
import {ErrorInterceptor} from './_interceptors/error.interceptor';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    ExpenseListComponent,
    ExpenseDetailComponent,
    ListsComponent,
    ExpenseCategoryListComponent,
    ExpenseCategoryDetailComponent,
    TestErrorsComponent,
    NotFoundComponent,
    ServerErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
