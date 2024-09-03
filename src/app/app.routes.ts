import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CollectionComponent } from './components/collection/collection.component';
import { DetailsComponent } from './components/details/details.component';
import { RecruitComponent } from './components/recruit/recruit.component';

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "characters", component: CollectionComponent, data: {type: "characters"}},
  { path: "characters/:id", component: DetailsComponent },
  { path: "recruit", component: RecruitComponent }
];
