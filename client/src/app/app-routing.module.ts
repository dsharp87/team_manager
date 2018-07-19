import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './game/game.component';
import { PlayersComponent } from './players/players.component';
import { ListComponent } from './list/list.component';
import { AddComponent } from './add/add.component';
import { StatusComponent } from './status/status.component';

const routes: Routes = [
  {
    path: '', 
    pathMatch: 'full',   
    redirectTo: 'players'  
  },
  {
    path: 'players',
    // pathMatch: 'full',  //CANNOT HAVE pathMatch on parent routes, as it blocks all child routes from being accessed
    component: PlayersComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list'
        },
      {
      path: 'list',
      pathMatch: 'full',
      component: ListComponent,
      children: []
      },
      {
        path: 'add',
        pathMatch: 'full',
        component: AddComponent,
        children: []
      }]
  },
  {
    path: 'status',
    component: StatusComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'game/1'
      },
      {
        path: 'game/:id',
        pathMatch: 'full',
        component: GameComponent,
        children: []
      },
    ]
  },
  {
    path: '**',     
    redirectTo: 'players/list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
