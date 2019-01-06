import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAndTableComponent } from './list-and-table/list-and-table.component';
import { HomeComponent } from './home/home.component';
import { ImagesComponent } from './images/images.component';
import { PostTilesComponent } from './post-tiles/post-tiles.component';

const routes: Routes = [
{ path: 'home', component: HomeComponent },
{ path: 'list', component: ListAndTableComponent },
{ path: 'images', component: ImagesComponent },
{ path: 'post', component: PostTilesComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: '**', redirectTo: '/home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
