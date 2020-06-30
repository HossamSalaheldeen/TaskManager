
import { NotfoundComponent } from './components/notfound/notfound.component';
import { TaskComponent } from './components/task/task.component';
import { AddComponent } from './components/add/add.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'add', component: AddComponent},
  {path:'task', component: TaskComponent},
  {path:'task/:id', component: TaskComponent},
  {path:'**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
