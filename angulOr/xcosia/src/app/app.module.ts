import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PersonListComponent } from './person-list/person-list.component';
import { SchoolClassComponent } from './school-class/school-class.component';
import { SchoolclassListComponent } from './schoolclass-list/schoolclass-list.component';
import { ExcursionListComponent } from './excursion-list/excursion-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonListComponent,
    SchoolClassComponent,
    SchoolclassListComponent,
    ExcursionListComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'schoolclasses', component: SchoolclassListComponent },
      { path: 'scdetails', component: SchoolClassComponent },
      { path: 'personlist', component: PersonListComponent },
      { path: '404', component: NotFoundComponent },
      { path: '**', redirectTo: '404', pathMatch: 'full' }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
