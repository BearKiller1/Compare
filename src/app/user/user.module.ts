import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { MemberComponent } from './member/member.component';
import { CompareComponent } from './compare/compare.component';
import { AboutComponent } from './about/about.component';
import { DetailComponent } from './detail/detail.component';
import { ProdnotfoundComponent } from './prodnotfound/prodnotfound.component';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [MemberComponent, CompareComponent, AboutComponent, DetailComponent, ProdnotfoundComponent, NewsComponent],
  imports: [
    CommonModule,
    UserRoutingModule
  ],
  exports:[CompareComponent]
})
export class UserModule { }
