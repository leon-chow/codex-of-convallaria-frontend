import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CollectionComponent } from './components/collection/collection.component';
import { DetailsComponent } from './components/details/details.component';

export const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "characters", component: CollectionComponent },
  { path: "characters/:id", component: DetailsComponent}
];