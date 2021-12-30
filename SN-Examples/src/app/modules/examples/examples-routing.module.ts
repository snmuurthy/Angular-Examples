import { LoginComponent } from './../../components/login/login.component';
import { ExampleListComponent } from './example-list/example-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: ExampleListComponent
      },
      // {
      //   path: "",
      //   loadChildren: () =>
      //     import('./modules/examples/examples.module').then(
      //       (m) => m.ExamplesModule
      //     ),
      // }
    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExamplesRoutingModule { }
