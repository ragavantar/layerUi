import { Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'entry', pathMatch: 'full' },
  { path: 'entry', loadChildren: () => import('../entry/entry.module').then( m => m.EntryPageModule)},
];


export default routes;