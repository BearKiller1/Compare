import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MemberComponent } from './member/member.component';
import { CompareComponent } from './compare/compare.component';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';
import { ProdnotfoundComponent } from './prodnotfound/prodnotfound.component';
import { NewsComponent } from './news/news.component';

const routes: Routes = [
  {
    path:"user",
    children:[
      {
        path:"member",
        component:MemberComponent,
      },
      {
        path:"compare",
        component:CompareComponent,
      },
      {
        path:"about",
        component:AboutComponent,
      },
      {
        path:"news",
        component:NewsComponent,
      },
      {
        path:"detail/:id",
        component:DetailComponent,
      },
      {
        path:"",
        redirectTo:"compare",
        pathMatch:"full",
      },
      {
        path:"**",
        component:ProdnotfoundComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
