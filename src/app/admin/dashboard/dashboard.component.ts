import { Component, OnInit } from '@angular/core';
import { DataService } from '../../user/data.service';

import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data:any;

  AddProdGroup = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    desc: new FormControl(''),
    img: new FormControl(''),
  });

  constructor(private Obj:DataService) { }

  ngOnInit(): void {
    this.data = this.Obj.getAll();
  }

  addProd(){
    var tmp = this.AddProdGroup.value;
    this.Obj.AddProd(tmp.name, tmp.price, tmp.desc, tmp.img);
  }
}
