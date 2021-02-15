import { Component, OnInit } from '@angular/core';

import {DataService } from '../data.service';
@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: ['./compare.component.scss']
})
export class CompareComponent implements OnInit {
  prod:any;

  box1 = false;
  box2 = false;

  prod1:any;
  prod2:any;
  constructor(private Obj:DataService) { }

  ngOnInit(): void {
    this.prod = this.Obj.getAll();
  }
  output(id:any){
    if(this.box1 == false){
      this.prod1 = this.Obj.getById(id);
      this.box1 = true;
    }
    else if(this.box2 == false){
      this.prod2 = this.Obj.getById(id);
      this.box2 = true;
    }
    else{
      this.prod2 = "";
      this.box2 = false;
      this.prod1 = this.Obj.getById(id);
      this.box1 = true;
    }
  }
}
