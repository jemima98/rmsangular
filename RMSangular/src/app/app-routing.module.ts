import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangejobidComponent } from './changejobid/changejobid.component';
import { CompletedinterviewlistComponent } from './completedinterviewlist/completedinterviewlist.component';
import { JobvacancylistComponent } from './jobvacancylist/jobvacancylist.component';

const routes: Routes = [
  {path: "", pathMatch: "full",redirectTo: "/jobvacancylist"},
  {path: "jobvacancylist", component:JobvacancylistComponent},
  {path: "changejobid", component:ChangejobidComponent},
  {path: "completedinterviewlist", component:CompletedinterviewlistComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
