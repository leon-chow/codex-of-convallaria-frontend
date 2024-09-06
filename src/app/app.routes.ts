import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CollectionComponent } from './components/collection/collection.component';
import { DetailsComponent } from './components/details/details.component';
import { RecruitComponent } from './components/recruit/recruit.component';

export const routes: Routes = [
  { path: "codex-of-convallaria", component: HomeComponent },
  { path: "codex-of-convallaria/characters", component: CollectionComponent, data: {type: "characters"}},
  { path: "codex-of-convallaria/characters/:id", component: DetailsComponent },
  { path: "codex-of-convallaria/recruit", component: RecruitComponent }
];
