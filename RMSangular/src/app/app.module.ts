import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobvacancylistComponent } from './jobvacancylist/jobvacancylist.component';
import { ChangejobidComponent } from './changejobid/changejobid.component';
import { CompletedinterviewlistComponent } from './completedinterviewlist/completedinterviewlist.component';

@NgModule({
  declarations: [
    AppComponent,
    JobvacancylistComponent,
    ChangejobidComponent,
    CompletedinterviewlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
