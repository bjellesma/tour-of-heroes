import { NgModule } from '@angular/core';
import {HeroesComponent} from './heroes/heroes.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent }
];

@NgModule({
  // The for forroot method configure the router at the root level
  imports: [
    RouterModule.forRoot(routes)
  ],
  // Export makes it available at the root level
  exports: [RouterModule]
})
export class AppRoutingModule { }
